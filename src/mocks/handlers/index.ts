import { authHandlers } from './auth';
import { studyHandlers } from './study';
import { spaceHandlers } from './space';

export const handlers = [...authHandlers, ...spaceHandlers, ...studyHandlers];
