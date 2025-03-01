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

export interface SpaceFormData extends Record<string, string | string[]> {
  name: string;
  codingTime: string;
  referenceUrl: string;
  totalUserCount: string[];
  languages: string[];
}

export interface TestCaseIO {
  input?: string;
  output?: string;
}

export interface TestCaseItem extends TestCaseIO {
  id?: number | string;
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

export interface CreateSpaceData {
  studyId: number;
  codingSpace: {
    name: string;
    codingTime: string;
    referenceUrl: string;
    totalUserCount: number;
    languages: string;
    description: string;
  };
  testCases: TestCaseIO[];
}
