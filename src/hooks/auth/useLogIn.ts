import { axiosInstance } from '@api/axiosInstance';
import authApi from '@api/domain/auth';
import { useMutation } from '@tanstack/react-query';
import tokenService from '@utils/service/tokenService';

export default function useLogIn() {
  const logInMutate = useMutation({
    mutationFn: ({ provider, oauthCode }: { provider: string; oauthCode: string }) =>
      authApi.login({ provider, oauthCode }),

    onSuccess: ({ accessToken }) => {
      tokenService.setToken(accessToken);
      axiosInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;
    },
  });

  return {
    logInMutate,
  };
}
