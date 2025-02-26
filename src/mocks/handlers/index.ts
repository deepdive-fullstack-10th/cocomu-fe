import { authHandlers } from './auth';
import { studyHandlers } from './study';
import { spaceHandlers, spaceStartHandlers } from './space';

export const handlers = [...authHandlers, ...spaceHandlers, ...studyHandlers, ...spaceStartHandlers];
