import spaceApi from '@api/domain/space';
import { useMutation } from '@tanstack/react-query';

export default function useSaveTabCode() {
  const saveTabCodeMutate = useMutation({
    mutationFn: ({ codingSpaceId, code }: { codingSpaceId: string; code: { code: string } }) =>
      spaceApi.codesave(codingSpaceId, code),
  });

  return { saveTabCodeMutate };
}
