import { http } from 'msw';
import { loginErrorResponse, loginResponse, refreshToken } from '@mocks/data/auth';
import { END_POINTS_V1, HTTP_STATUS_CODE } from '@constants/api';
import { LogInParams } from '@customTypes/auth';

export const authHandlers = [
  http.post(END_POINTS_V1.AUTH.OAUTH_LOGIN, async ({ request }) => {
    const params = (await request.json()) as LogInParams;

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    if (!params.provider || !params.oauthCode) {
      return new Response(JSON.stringify(loginErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new Response(JSON.stringify(loginResponse), {
      status: HTTP_STATUS_CODE.SUCCESS,
      headers: {
        'Set-Cookie': `refreshToken=${refreshToken}; HttpOnly; Path=/`,
        'Content-Type': 'application/json',
      },
    });
  }),
];
