import axios from 'axios';

import { checkAndSetToken, handleAPIError, handleTokenError } from '@api/interceptors';
import { BASE_URL } from '@constants/api';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  withCredentials: true,
  useAuth: true,
});

axiosInstance.interceptors.request.use(checkAndSetToken, handleAPIError);

axiosInstance.interceptors.response.use((response) => response, handleTokenError);

axiosInstance.interceptors.response.use((response) => response, handleAPIError);
