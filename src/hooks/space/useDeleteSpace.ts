import { useMutation, useQueryClient } from '@tanstack/react-query';
import QUERY_KEYS from '@constants/queryKeys';
import spaceApi from '@api/domain/space';

export default function useDeleteSpace() {
  const queryClient = useQueryClient();

  const deleteStudyMutate = useMutation({
    mutationFn: spaceApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SPACE_LIST] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER_SPACE_LIST] });
    },
  });

  return { deleteStudyMutate };
}
