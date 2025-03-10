import { Dispatch, SetStateAction } from 'react';
import { UserRoleData } from './user';
import { FilterData } from './common';

export type SpaceStatusData = 'WAITING' | 'RUNNING' | 'FEEDBACK' | 'FINISH';
export type TestCaseType = 'BASE' | 'CUSTOM';

export interface SpaceListData {
  status?: string;
  languageIds?: string;
  joinable?: boolean;
  keyword?: string;
  lastId?: number;
}

export interface SpaceData {
  id: number;
  joinedMe: boolean;
  name: string;
  language: FilterData;
  currentUserCount: number;
  totalUserCount: number;
  createdAt: string;
  status: string;
  currentUsers: UserRoleData[];
}

export interface SpaceFormData extends Record<string, string | number[]> {
  totalUserCount: number[];
  timerTime: string;
  workbookUrl: string;
  name: string;
  languageId: number[];
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

export interface CreateSpaceFormData {
  name: string;
  timerTime: number;
  workbookUrl: string;
  totalUserCount: number;
  languageId: number;
  description: string;
}

export interface CreateSpaceData extends CreateSpaceFormData {
  studyId: number;
  testCases: TestCaseIO[];
}

export interface ActiveTab {
  tabId: number;
  documentKey: string;
  userId: number;
  nickname: string;
  profileImageUrl: string;
  role: 'HOST' | 'GUEST';
}
