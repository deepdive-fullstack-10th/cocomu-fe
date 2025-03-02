import { useTabRun, useCodeSubmit } from '@hooks/useIDE';

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
