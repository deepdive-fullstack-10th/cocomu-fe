import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';
import { TokenData } from '@customTypes/auth';

interface LogInParams {
  provider: string;
  oauthCode: number;
}

const authApi = {
  login: async ({ provider, oauthCode }: LogInParams) => {
    const { data } = await axiosInstance.post<TokenData>(
      END_POINTS_V1.AUTH.OAUTH_LOGIN,
      { params: { provider, oauthCode } },
      { useAuth: false },
    );

    return data;
  },

  reIssue: async () => {
    const { data } = await axiosInstance.post<TokenData>(END_POINTS_V1.AUTH.REFRESH_TOKEN);

    return data;
  },
};

export default authApi;
