import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { HTTPError } from '@api/HTTPError';
import { axiosInstance } from '@api/axiosInstance';

import { PATH } from '@constants/path';
import { ACCESS_TOKEN_KEY, HTTP_STATUS_CODE } from '@constants/api';

export interface ErrorResponseData {
  statusCode?: number;
  message?: string;
  code?: number;
}

export const checkAndSetToken = (config: InternalAxiosRequestConfig) => {
  if (!config.useAuth || !config.headers || config.headers.Authorization) return config;

  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

  if (!accessToken) {
    window.location.href = PATH.ROOT;
    throw new Error('토큰이 유효하지 않습니다');
  }

  // eslint-disable-next-line
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};

export const handleTokenError = async (error: AxiosError<ErrorResponseData>) => {
  const originalRequest = error.config;

  if (!error.response || !originalRequest) throw new Error('에러가 발생했습니다.');

  const { data, status } = error.response;

  // TODO: 조건 - 특정 에러코드일때 액세스 토큰 재발급 후 다시 요청
  if (true) {
    // const { accessToken } = await -> TODO: 토큰 재발급 api
    // originalRequest.headers.Authorization = `Bearer ${accessToken}`;
    // localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);

    return axiosInstance(originalRequest);
  }

  // TODO: 조건 - 특정 에러코드일때 액세스 토큰 제거
  if (true) {
    localStorage.removeItem(ACCESS_TOKEN_KEY);

    throw new HTTPError(status, data.message, data.code);
  }

  throw error;
};

export const handleAPIError = (error: AxiosError<ErrorResponseData>) => {
  if (!error.response) throw new Error('에러가 발생했습니다.');

  const { data, status } = error.response;

  if (status >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
    throw new HTTPError(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, data.message);
  }

  throw new HTTPError(status, data.message, data.code);
};

export const handleSuccess = (response: AxiosResponse) => response.data;
