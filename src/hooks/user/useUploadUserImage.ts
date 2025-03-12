import userApi from '@api/domain/user';
import QUERY_KEYS from '@constants/queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useUploadUserImage() {
  const queryClient = useQueryClient();

  const uploadUserImageMutate = useMutation({
    mutationFn: userApi.uploadImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER_INFO], exact: false });
    },
  });

  return {
    uploadUserImage: uploadUserImageMutate.mutate,
    imageUrl: uploadUserImageMutate.data,
  };
}
