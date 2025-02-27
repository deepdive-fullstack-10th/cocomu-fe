import { authHandlers } from './auth';
import { studyHandlers } from './study';
import { testCaseHandlers } from './testCase';
import { spaceDetailHandlers, spaceStartHandlers, tabDataHandlers } from './space';

export const handlers = [
  ...authHandlers,
  ...spaceDetailHandlers,
  ...studyHandlers,
  ...spaceStartHandlers,
  ...tabDataHandlers,
  ...testCaseHandlers,
];
