import { authHandlers } from './auth';
import { studyHandlers } from './study';
import { spaceDetailHandlers, spaceStartHandlers } from './space';

export const handlers = [...authHandlers, ...spaceDetailHandlers, ...studyHandlers, ...spaceStartHandlers];
