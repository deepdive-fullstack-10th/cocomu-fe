export const BASE_URL = import.meta.env.VITE_API_URL;
const API_V1 = import.meta.env.VITE_API_V1;

const BASE_PATH_V1 = {
  STUDY: `${API_V1}/studies`,
  CODING_SPACE: `${API_V1}/coding-spaces`,
  IDE: `${API_V1}/ide`,
  USER: `${API_V1}/users`,
  AUTH: `${API_V1}/auth`,
  FILES: `${API_V1}/files`,
};

export const END_POINTS_V1 = {
  STUDY: {
    LIST: BASE_PATH_V1.STUDY,
    PUBLIC_CREATE: `${BASE_PATH_V1.STUDY}/public`,
    PRIVATE_CREATE: `${BASE_PATH_V1.STUDY}/private`,
    PUBLIC_JOIN: `${BASE_PATH_V1.STUDY}/public/join`,
    PRIVATE_JOIN: `${BASE_PATH_V1.STUDY}/private/join`,
    EDIT: (studyId: string) => `${BASE_PATH_V1.STUDY}/${studyId}/edit`,
    LEAVE: (studyId: string) => `${BASE_PATH_V1.STUDY}/${studyId}/leave`,
    DELETE: (studyId: string) => `${BASE_PATH_V1.STUDY}/${studyId}/remove`,
    DETAIL: (studyId: string) => `${BASE_PATH_V1.STUDY}/${studyId}`,
    MEMBER_LIST: (studyId: string) => `${BASE_PATH_V1.STUDY}/${studyId}/members`,
    INFO: (studyId: string) => `${BASE_PATH_V1.STUDY}/${studyId}/studyInfo`,
    PARTICIPATED_STUDIES: (userId: string) => `${BASE_PATH_V1.STUDY}/me/${userId}`,
  },

  CODING_SPACE: {
    CREATE: BASE_PATH_V1.CODING_SPACE,
    JOIN: `${BASE_PATH_V1.CODING_SPACE}/join`,
    SPACE_LIST: (studyId: string) => `${BASE_PATH_V1.CODING_SPACE}/studies/${studyId}`,
    PAGE: (codingSpaceId: string) => `${BASE_PATH_V1.CODING_SPACE}/${codingSpaceId}`,
    TAB: (codingSpaceId: string) => `${BASE_PATH_V1.CODING_SPACE}/${codingSpaceId}/tab`,
    ALL_TABS: (codingSpaceId: string) => `${BASE_PATH_V1.CODING_SPACE}/${codingSpaceId}/tabs`,
    START: (codingSpaceId: string) => `${BASE_PATH_V1.CODING_SPACE}/${codingSpaceId}/start`,
    TIMER: (codingSpaceId: string) => `${BASE_PATH_V1.CODING_SPACE}/${codingSpaceId}/timer`,
    COMPLETE: (codingSpaceId: string) => `${BASE_PATH_V1.CODING_SPACE}/${codingSpaceId}/complete`,
    TEST_CASE_UPDATE: (codingSpaceId: string) => `${BASE_PATH_V1.CODING_SPACE}/${codingSpaceId}/test-case`,
    PARTICIPATED_CODING_SPACES: (userId: string) => `${BASE_PATH_V1.CODING_SPACE}/me/${userId}`,
  },

  IDE: {
    RUN: '/run',
    SUBMIT: (ideID: string) => `${BASE_PATH_V1.IDE}/${ideID}/submit`,
  },

  USER: {
    UPDATE_PROFILE: BASE_PATH_V1.USER,
    INFO: `${BASE_PATH_V1.USER}/me`,
    MY_PAGE: (userId: string) => `${BASE_PATH_V1.USER}/me/${userId}`,
  },

  AUTH: {
    OAUTH_LOGIN: `${BASE_PATH_V1.AUTH}/oauth-login`,
    REFRESH_TOKEN: `${BASE_PATH_V1.AUTH}/re-issue`,
  },

  FILES: {
    UPLOAD_PROFILE_IMAGE: `${BASE_PATH_V1.FILES}/profile-image`,
  },
} as const;

export const STOMP_ENDPOINTS = {
  SPACE_ALARM_SUBSCRIBE: (codingSpaceId: string) => `/sub/stomp/coding-space/${codingSpaceId}`,
  TEST_CASE_SUBSCRIBE: (codingSpaceId: string) => `/sub/stomp/coding-spaces/${codingSpaceId}/test-case`,
  EXECUTION_SUBSCRIBE: (ideId: string) => `/sub/stomp/ide-execution/${ideId}`,
  RESULT_SUBSCRIBE: (ideId: string) => `/sub/stomp/ide-result/${ideId}`,
} as const;

export const HTTP_STATUS_CODE = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const ERROR_CODE = {
  INVALID_REFRESH_TOKEN: 9101,
  INVALID_ACCESS_TOKEN: 9102,
  EXPIRED_REFRESH_TOKEN: 9103,
  EXPIRED_ACCESS_TOKEN: 9104,
  INVALID_TOKEN_VALIDATE: 9105,
  NULL_REFRESH_TOKEN: 9106,
  UNAUTHORIZED: 9201,
  UNEXPECTED_TOKEN_ERROR: 9999,
} as const;

export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;

const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;

const OAUTH_BASE_URL = import.meta.env.VITE_OAUTH_BASE_URL;

const REDIRECT_BASE_URL = `${OAUTH_BASE_URL}/callback`;

/* eslint-disable max-len */

export const GOOGLE_AUTH_API_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&response_type=code&scope=profile%20email&redirect_uri=${REDIRECT_BASE_URL}/google`;

export const GITHUB_AUTH_API_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_BASE_URL}/github`;

export const KAKAO_AUTH_API_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_BASE_URL}/kakao`;

/* eslint-enable max-len */
