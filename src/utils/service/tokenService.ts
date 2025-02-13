import { ACCESS_TOKEN_KEY } from '@constants/api';

const tokenService = {
  getToken: () => localStorage.getItem(ACCESS_TOKEN_KEY),

  setToken: (token: string) => localStorage.setItem(ACCESS_TOKEN_KEY, token),

  removeToken: () => localStorage.removeItem(ACCESS_TOKEN_KEY),
};

export default tokenService;
