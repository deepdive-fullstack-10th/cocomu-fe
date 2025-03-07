import { generatePath } from 'react-router-dom';

export const PATH = {
  ROOT: '/',
  STUDY: {
    LIST: '/study',
    CREATE: '/study/create',
    EDIT: '/study/:studyId/edit',
    PARTICIPATION: '/study/:studyId/participation',
    DETAIL: '/study/:studyId',
    MEMBERS: 'members',
    INFO: 'info',
    SPACE_LIST: 'spaces',
  },
  SPACE: {
    DETAIL: '/space/:codingSpaceId',
    CREATE: '/space/:studyId/create',
    WAITING: '/space/:codingSpaceId/wait',
    RUNNING: '/space/:codingSpaceId/running',
    FEEDBACK: '/space/:codingSpaceId/feedback',
  },
  MYPAGE: {
    DETAIL: '/mypage/:userId',
    STUDY: '',
    SPACE: 'space',
  },
  OAUTH: '/callback/:provider',
};

export const ROUTES = {
  ROOT: () => generatePath(PATH.ROOT),
  STUDY: {
    LIST: () => generatePath(PATH.STUDY.LIST),
    CREATE: () => generatePath(PATH.STUDY.CREATE),
    EDIT: ({ studyId }: { studyId: number }) => generatePath(PATH.STUDY.EDIT, { studyId }),
    PARTICIPATION: ({ studyId }: { studyId: number }) => generatePath(PATH.STUDY.PARTICIPATION, { studyId }),
    DETAIL: ({ studyId }: { studyId: number }) => generatePath(PATH.STUDY.DETAIL, { studyId }),
    MEMBERS: ({ studyId }: { studyId: number }) =>
      generatePath(`${PATH.STUDY.DETAIL}/${PATH.STUDY.MEMBERS}`, { studyId }),
    INFO: ({ studyId }: { studyId: number }) => generatePath(`${PATH.STUDY.DETAIL}/${PATH.STUDY.INFO}`, { studyId }),
    SPACE_LIST: ({ studyId }: { studyId: number }) =>
      generatePath(`${PATH.STUDY.DETAIL}/${PATH.STUDY.SPACE_LIST}`, { studyId }),
  },
  SPACE: {
    DETAIL: ({ codingSpaceId }: { codingSpaceId: number }) => generatePath(PATH.SPACE.DETAIL, { codingSpaceId }),
    CREATE: ({ studyId }: { studyId: number }) => generatePath(PATH.SPACE.CREATE, { studyId }),
    WAITING: ({ codingSpaceId }: { codingSpaceId: number }) => generatePath(PATH.SPACE.WAITING, { codingSpaceId }),
    RUNNING: ({ codingSpaceId }: { codingSpaceId: number }) => generatePath(PATH.SPACE.RUNNING, { codingSpaceId }),
    FEEDBACK: ({ codingSpaceId }: { codingSpaceId: number }) => generatePath(PATH.SPACE.FEEDBACK, { codingSpaceId }),
  },
  MYPAGE: {
    DETAIL: ({ userId }: { userId: string }) => generatePath(PATH.MYPAGE.DETAIL, { userId }),
    STUDY: ({ userId }: { userId: string }) => generatePath(PATH.MYPAGE.DETAIL, { userId }),
    SPACE: ({ userId }: { userId: string }) => generatePath(`${PATH.MYPAGE.DETAIL}/${PATH.MYPAGE.SPACE}`, { userId }),
  },
};
