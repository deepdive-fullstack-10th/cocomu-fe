import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';
import { LogInParams } from '@customTypes/auth';

const authApi = {
  login: async ({ provider, oauthCode }: LogInParams) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.AUTH.OAUTH_LOGIN, null, {
      params: { provider, oauthCode },
      useAuth: false,
    });

    return data.result;
  },

  reIssue: async () => {
    const { data } = await axiosInstance.post(END_POINTS_V1.AUTH.REFRESH_TOKEN);

    return data.result;
  },
};

export default authApi;
