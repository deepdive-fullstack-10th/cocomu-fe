import { authHandlers } from './auth';
import { studyHandlers } from './study';
import { testCaseHandlers } from './testCase';
import { spaceDetailHandlers, spaceHandlers, spaceStartHandlers, tabDataHandlers } from './space';
import { ideRunHandlers, ideSubmitHandler } from './ide';

export const handlers = [
  ...authHandlers,
  ...spaceDetailHandlers,
  ...studyHandlers,
  ...spaceStartHandlers,
  ...tabDataHandlers,
  ...testCaseHandlers,
  ...ideRunHandlers,
  ...ideSubmitHandler,
  ...spaceHandlers,
];
