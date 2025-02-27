import { useMutation } from '@tanstack/react-query';
import testCaseApi from '@api/domain/testCase';

export function useTestcaseUpdate() {
  const testCaseUpdateMutate = useMutation({
    mutationFn: testCaseApi.updateTestCase,
  });

  return { testCaseUpdateMutate };
}
