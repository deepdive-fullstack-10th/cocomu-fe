import { axiosInstance } from '@api/axiosInstance';
import authApi from '@api/domain/auth';
import { ACCESS_TOKEN_KEY } from '@constants/api';
import { useMutation } from '@tanstack/react-query';

export default function useLogIn() {
  const logInMutate = useMutation({
    mutationFn: authApi.login,
    onSuccess: ({ accessToken }) => {
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
      axiosInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;
    },
  });

  return {
    logInMutate,
  };
}
