import { authHandlers } from './auth';
import { studyHandlers } from './study';
import { spaceHandlers } from './space';
import { ideRunHandlers, ideSubmitHandler } from './ide';

export const handlers = [...authHandlers, ...studyHandlers, ...spaceHandlers, ...ideRunHandlers, ...ideSubmitHandler];
