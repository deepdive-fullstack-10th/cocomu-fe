import { Dispatch, SetStateAction } from 'react';
import { UserData } from './user';

export type SpaceStatusData = 'WAITING' | 'IN_PROGRESS' | 'FEEDBACK' | 'COMPLETED';

export type TestCaseItemType = 'BASE' | 'CUSTOM';

export type TestCaseStatusData = 'DEFAULT' | 'CUSTOM';

export type Language = 'python' | 'java' | 'javascript' | 'c';

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

export interface SpaceOutletProps {
  id?: string;
  studyId?: string;
  language?: Language;
  totalUserCount?: number;
  setTabInfo?: Dispatch<SetStateAction<{ code: string; id: string }>>;
  setInput?: Dispatch<SetStateAction<string>>;
}

export interface SpaceDetail {
  codingTime: number;
  description: string;
  hasLeaderRole: boolean;
  name: string;
  referenceUrl: string;
  status: string;
  testCase: TestCaseItem[];
  id?: string;
  studyId?: string;
  language?: Language;
  totalUserCount?: number;
}
