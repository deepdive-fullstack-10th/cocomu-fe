import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';

const authApi = {
  login: async ({ provider, oauthCode }: { provider: string; oauthCode: string }) => {
    const response = await axiosInstance.post<{ accessToken: string }>(END_POINTS_V1.AUTH.OAUTH_LOGIN, {
      params: { provider, oauthCode },
    });
    return response.data;
  },

export default authApi;
