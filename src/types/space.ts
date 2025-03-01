import { Dispatch, SetStateAction } from 'react';
import { UserData } from './user';

export type SpaceStatusData = 'WAITING' | 'IN_PROGRESS' | 'FEEDBACK' | 'COMPLETED';

export type TestCaseType = 'BASE' | 'CUSTOM';

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
  language: string[];
  description: string;
}

export interface TestCaseIO {
  input?: string;
  output?: string;
}

export interface TestCaseData extends TestCaseIO {
  id?: number | string;
  type?: TestCaseType;
}

export interface SpaceOutletProps {
  id?: string;
  studyId?: string;
  language?: string;
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
  testCase: TestCaseData[];
  id?: string;
  studyId?: string;
  language?: string;
  totalUserCount?: number;
}

export interface CreateSpaceFormData extends Record<string, string | number> {
  name: string;
  codingTime: number;
  referenceUrl: string;
  totalUserCount: number;
  language: string;
  description: string;
}

export interface CreateSpaceData {
  studyId: number;
  codingSpace: CreateSpaceFormData;
  testCases: TestCaseIO[];
}
