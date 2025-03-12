import userApi from '@api/domain/user';
import QUERY_KEYS from '@constants/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useEditUser() {
  const queryClient = useQueryClient();

  const editUserMutate = useMutation({
    mutationFn: userApi.edit,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER_INFO], exact: false });
    },
  });

  return { editUserMutate };
}
