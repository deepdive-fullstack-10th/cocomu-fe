import { authHandlers } from './auth';
import { studyHandlers } from './study';
import { spaceDetailHandlers, spaceStartHandlers, spaceHandlers } from './space';

export const handlers = [...authHandlers, ...spaceDetailHandlers, ...studyHandlers, ...spaceStartHandlers, ...spaceHandlers];
