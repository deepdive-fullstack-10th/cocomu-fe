import { axiosInstance } from '@api/axiosInstance';
import authApi from '@api/domain/auth';
import { ACCESS_TOKEN_KEY } from '@constants/api';
import { ROUTES } from '@constants/path';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function useLogIn() {
  const navigate = useNavigate();

  const logInMutate = useMutation({
    mutationFn: authApi.login,
    onSuccess: ({ accessToken }) => {
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
      axiosInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;

      navigate(ROUTES.ROOT());
    },
  });

  return {
    logInMutate,
  };
}
