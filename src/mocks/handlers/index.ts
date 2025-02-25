import { authHandlers } from './auth';
import { studyHandlers } from './study';

export const handlers = [...authHandlers, ...studyHandlers];
