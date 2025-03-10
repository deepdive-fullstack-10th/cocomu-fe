import { generatePath } from 'react-router-dom';

export const PATH = {
  ROOT: '/',
  STUDY: {
    CREATE: '/study/create',
    EDIT: '/study/:studyId/edit',
    PARTICIPATION: '/study/:studyId/participation',
    DETAIL: '/study/:studyId',
    MEMBERS: 'members',
    INFO: 'info',
    SPACE_LIST: 'spaces',
  },
  SPACE: {
    CREATE: '/space/:studyId/create',
    ENTER: '/space/:studyId/:codingSpaceId',
    WAITING: 'wait',
    RUNNING: 'running',
    FEEDBACK: 'feedback',
    FINISH: 'finish',
  },
  MYPAGE: {
    DETAIL: '/mypage/:userId',
    SPACE: 'space',
  },
  OAUTH: '/callback/:provider',
};

export const ROUTES = {
  ROOT: () => generatePath(PATH.ROOT),
  STUDY: {
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
    CREATE: ({ studyId }: { studyId: number }) => generatePath(PATH.SPACE.CREATE, { studyId }),
    ENTER: ({ studyId, codingSpaceId }: { studyId: number; codingSpaceId: number }) =>
      generatePath(PATH.SPACE.ENTER, { studyId, codingSpaceId }),
    WAITING: ({ studyId, codingSpaceId }: { studyId: number; codingSpaceId: number }) =>
      generatePath(`${PATH.SPACE.ENTER}/${PATH.SPACE.WAITING}`, { studyId, codingSpaceId }),
    RUNNING: ({ studyId, codingSpaceId }: { studyId: number; codingSpaceId: number }) =>
      generatePath(`${PATH.SPACE.ENTER}/${PATH.SPACE.RUNNING}`, { studyId, codingSpaceId }),
    FEEDBACK: ({ studyId, codingSpaceId }: { studyId: number; codingSpaceId: number }) =>
      generatePath(`${PATH.SPACE.ENTER}/${PATH.SPACE.FEEDBACK}`, { studyId, codingSpaceId }),
    FINISH: ({ studyId, codingSpaceId }: { studyId: number; codingSpaceId: number }) =>
      generatePath(`${PATH.SPACE.ENTER}/${PATH.SPACE.FINISH}`, { studyId, codingSpaceId }),
  },
  MYPAGE: {
    DETAIL: ({ userId }: { userId: number }) => generatePath(PATH.MYPAGE.DETAIL, { userId }),
    SPACE: ({ userId }: { userId: number }) => generatePath(`${PATH.MYPAGE.DETAIL}/${PATH.MYPAGE.SPACE}`, { userId }),
  },
};
