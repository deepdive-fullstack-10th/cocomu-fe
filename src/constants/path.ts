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
  MYPAGE: '/mypage/:userId',
};

export const ROUTES = {
  ROOT: () => generatePath(PATH.ROOT),
  STUDY: {
    LIST: () => generatePath(PATH.STUDY.LIST),
    CREATE: () => generatePath(PATH.STUDY.CREATE),
    EDIT: ({ studyId }: { studyId: string }) => generatePath(PATH.STUDY.EDIT, { studyId }),
    PARTICIPATION: ({ studyId }: { studyId: string }) => generatePath(PATH.STUDY.PARTICIPATION, { studyId }),
    DETAIL: ({ studyId }: { studyId: string }) => generatePath(PATH.STUDY.DETAIL, { studyId }),
    MEMBERS: ({ studyId }: { studyId: string }) =>
      generatePath(`${PATH.STUDY.DETAIL}/${PATH.STUDY.MEMBERS}`, { studyId }),
    INFO: ({ studyId }: { studyId: string }) => generatePath(`${PATH.STUDY.DETAIL}/${PATH.STUDY.INFO}`, { studyId }),
    SPACE_LIST: ({ studyId }: { studyId: string }) =>
      generatePath(`${PATH.STUDY.DETAIL}/${PATH.STUDY.SPACE_LIST}`, { studyId }),
  },
  SPACE: {
    DETAIL: ({ codingSpaceId }: { codingSpaceId: string }) => generatePath(PATH.SPACE.DETAIL, { codingSpaceId }),
    CREATE: ({ studyId }: { studyId: string }) => generatePath(PATH.SPACE.CREATE, { studyId }),
    WAITING: ({ codingSpaceId }: { codingSpaceId: string }) => generatePath(PATH.SPACE.WAITING, { codingSpaceId }),
    RUNNING: ({ codingSpaceId }: { codingSpaceId: string }) => generatePath(PATH.SPACE.RUNNING, { codingSpaceId }),
    FEEDBACK: ({ codingSpaceId }: { codingSpaceId: string }) => generatePath(PATH.SPACE.FEEDBACK, { codingSpaceId }),
  },
  MYPAGE: ({ userId }: { userId: string }) => generatePath(PATH.MYPAGE, { userId }),
};
