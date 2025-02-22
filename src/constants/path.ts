import { generatePath } from 'react-router-dom';

export const PATH = {
  ROOT: '/',
  STUDY: {
    LIST: '/study',
    CREATE: '/study/create',
    PARTICIPATION: '/study/:studyId/participation',
    DETAIL: '/study/:studyId',
    MEMBERS: 'members',
    INFO: 'info',
    SPACE_LIST: 'spaces',
  },
  SPACE: {
    DETAIL: '/space/:spaceId',
    CREATE: '/space/:studyId/create',
    WAITING: '/space/:spaceId/wait',
    RUNNING: '/space/:spaceId/running',
    FEEDBACK: '/space/:spaceId/feedback',
  },
  MYPAGE: '/mypage/:userId',
};

export const ROUTES = {
  ROOT: () => generatePath(PATH.ROOT),
  STUDY: {
    LIST: () => generatePath(PATH.STUDY.LIST),
    CREATE: () => generatePath(PATH.STUDY.CREATE),
    PARTICIPATION: ({ studyId }: { studyId: string }) => generatePath(PATH.STUDY.PARTICIPATION, { studyId }),
    DETAIL: ({ studyId }: { studyId: string }) => generatePath(PATH.STUDY.DETAIL, { studyId }),
    MEMBERS: ({ studyId }: { studyId: string }) =>
      generatePath(`${PATH.STUDY.DETAIL}/${PATH.STUDY.MEMBERS}`, { studyId }),
    INFO: ({ studyId }: { studyId: string }) => generatePath(`${PATH.STUDY.DETAIL}/${PATH.STUDY.INFO}`, { studyId }),
    SPACE_LIST: ({ studyId }: { studyId: string }) =>
      generatePath(`${PATH.STUDY.DETAIL}/${PATH.STUDY.SPACE_LIST}`, { studyId }),
  },
  SPACE: {
    DETAIL: ({ spaceId }: { spaceId: string }) => generatePath(PATH.SPACE.DETAIL, { spaceId }),
    CREATE: ({ studyId }: { studyId: string }) => generatePath(PATH.SPACE.CREATE, { studyId }),
    WAITING: ({ spaceId }: { spaceId: string }) => generatePath(PATH.SPACE.WAITING, { spaceId }),
    RUNNING: ({ spaceId }: { spaceId: string }) => generatePath(PATH.SPACE.RUNNING, { spaceId }),
    FEEDBACK: ({ spaceId }: { spaceId: string }) => generatePath(PATH.SPACE.FEEDBACK, { spaceId }),
  },
  MYPAGE: ({ userId }: { userId: string }) => generatePath(PATH.MYPAGE, { userId }),
};
