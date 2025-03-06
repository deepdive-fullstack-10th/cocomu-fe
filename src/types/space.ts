import { Dispatch, SetStateAction } from 'react';
import { UserData } from './user';

export type SpaceStatusData = 'WAITING' | 'IN_PROGRESS' | 'FEEDBACK' | 'COMPLETED';
export type TestCaseType = 'BASE' | 'CUSTOM';

export interface SpaceListParams {
  joinedMe?: boolean;
  languageIds: string | undefined;
  status?: string[];
  keyword?: string;
  lastId?: number;
  currentUserCount?: number;
}

export interface SpaceData {
  id: number;
  joinedMe: boolean;
  name: string;
  language: string;
  totalUserCount: number;
  createdAt: string;
  status: string;
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

export interface SubmitTestCase extends TestCaseIO {
  id?: number | string;
}

export interface TestCaseData extends SubmitTestCase {
  type?: TestCaseType;
}

export interface Tab {
  id: string;
  code: string;
}

export interface SpaceOutletProps {
  status?: string;
  language?: string;
  totalUserCount?: number;
  setTabInfo?: Dispatch<SetStateAction<{ code: string; id: string }>>;
  setInputData?: Dispatch<SetStateAction<string>>;
  setCompleteTabs?: Dispatch<SetStateAction<Tab[]>>;
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
