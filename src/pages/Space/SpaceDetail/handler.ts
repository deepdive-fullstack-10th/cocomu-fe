import { useModalStore } from '@stores/useModalStore';
import { useSpaceStart } from '@hooks/useSpace';
import { useTabRun, useCodeSubmit } from '@hooks/useIDE';
import { useTestCaseUpdate } from '@hooks/useTestCase';

export function useTestCaseOpen(testCaseStatus, testCaseList, setTestCaseList, TestCaseSubmitHandler) {
  const { open } = useModalStore();

  const testCaseOpenHandler = () => {
    open('testCase', {
      status: testCaseStatus,
      testCases: testCaseList,
      setTestCaseList,
      onSubmit: TestCaseSubmitHandler,
    });
  };

  return { testCaseOpenHandler };
}

export function useTestCaseSubmit(spaceId, testCaseList, setTestCaseList) {
  const { testCaseUpdateMutate } = useTestCaseUpdate();

  const TestCaseSubmitHandler = async () => {
    const filteredTestCases = testCaseList
      ?.filter((testCase) => testCase.type !== 'BASE')
      .map(({ input, output }) => ({ input, output }));
    const newTestCases = await testCaseUpdateMutate.mutateAsync({ spaceId, testCase: filteredTestCases });
    const BaseTestCase = testCaseList?.filter((testCase) => testCase.type === 'BASE');
    const FetchTestCaseList = BaseTestCase.concat(newTestCases);
    setTestCaseList(FetchTestCaseList);
  };

  return { TestCaseSubmitHandler };
}

export function useSpaceStatusHandler(spaceId, studyId, status) {
  const { spaceStartMutate } = useSpaceStart();
  const spaceStartHandler = () => {
    if (status === '대기') {
      spaceStartMutate.mutate({ spaceId, studyId });
    }
  };
  return { spaceStartHandler };
}

export function useCodeRun(tabInfo, input, language) {
  const { ideRun } = useTabRun();
  const codeRun = async () => {
    await ideRun.mutateAsync({
      ideId: tabInfo?.id,
      language,
      inputData: input,
      code: tabInfo?.code,
    });
  };

  return { codeRun };
}

export function useCodeSubmitHandler(tabInfo, language, testCaseList) {
  const filterTestCaseList = (testCaseList || []).map(({ id, input, output }) => ({ id, input, output }));

  const { ideSubmit } = useCodeSubmit();
  const codeSubmit = async () => {
    await ideSubmit.mutateAsync({
      ideId: tabInfo?.id,
      language,
      code: tabInfo?.code,
      testCases: filterTestCaseList,
    });
  };

  return { codeSubmit };
}
