export interface LogInParams {
  provider: string;
  oauthCode: string;
}

export interface TokenData {
  result: {
    accessToken: string;
  };
}
