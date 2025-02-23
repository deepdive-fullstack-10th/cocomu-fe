import { UserData } from './user';

export type SpaceStatusData = 'WAITING' | 'IN_PROGRESS' | 'FEEDBACK' | 'COMPLETED';

export type TestCaseItemType = 'BASE' | 'CUSTOM';

export type TestCaseStatusData = 'DEFAULT' | 'CUSTOM';

export interface SpaceData {
  id: number;
  joinedSpace: boolean;
  name: string;
  language: string;
  totalUserCount: number;
  createdAt: string;
  status: SpaceStatusData;
  leader: UserData;
  currentUsers: UserData[];
}

export interface TestCaseItem {
  id?: number | string;
  input?: string;
  output?: string;
  type?: TestCaseItemType;
}
