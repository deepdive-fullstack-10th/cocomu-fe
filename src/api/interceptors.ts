import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { HTTPError } from '@api/HTTPError';
import { axiosInstance } from '@api/axiosInstance';

import { ACCESS_TOKEN_KEY, ERROR_CODE, HTTP_STATUS_CODE } from '@constants/api';
import authApi from './domain/auth';

export interface ErrorResponseData {
  message?: string;
  code?: number;
}

export const checkAndSetToken = (config: InternalAxiosRequestConfig) => {
  if (!config.useAuth || !config.headers || config.headers.Authorization) return config;

  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

  if (!accessToken) {
    throw new Error('로그인을 해주세요.');
  }

  // eslint-disable-next-line
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};

export const handleAPIError = (error: AxiosError<ErrorResponseData>) => {
  if (!error.response) throw new Error('에러가 발생했습니다.');

  const { data, status } = error.response;

  if (status >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
    throw new HTTPError(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, data.message);
  }

  throw new HTTPError(status, data.message, data.code);
};

export const handleResponse = async (response: AxiosResponse) => {
  const { status, data, config } = response;

  if (status >= 400) {
    if (status === HTTP_STATUS_CODE.BAD_REQUEST && data.code === ERROR_CODE.EXPIRED_ACCESS_TOKEN) {
      try {
        const { accessToken } = await authApi.reIssue();
        config.headers.Authorization = `Bearer ${accessToken}`;
        localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);

        return axiosInstance(config);
      } catch (error) {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        throw new HTTPError(status, data?.message, data?.code);
      }
    }

    if (
      status === HTTP_STATUS_CODE.BAD_REQUEST &&
      (data.code === ERROR_CODE.INVALID_ACCESS_TOKEN ||
        data.code === ERROR_CODE.INVALID_REFRESH_TOKEN ||
        data.code === ERROR_CODE.EXPIRED_REFRESH_TOKEN ||
        data.code === ERROR_CODE.INVALID_TOKEN_VALIDATE ||
        data.code === ERROR_CODE.NULL_REFRESH_TOKEN ||
        data.code === ERROR_CODE.UNEXPECTED_TOKEN_ERROR ||
        data.code === ERROR_CODE.UNAUTHORIZED)
    ) {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      throw new HTTPError(status, data?.message, data?.code);
    }

    throw new HTTPError(status, data?.message, data?.code);
  }

  return response;
};
