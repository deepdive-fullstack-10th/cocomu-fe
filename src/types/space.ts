import { Dispatch, SetStateAction } from 'react';
import { UserRoleData } from './user';

export type SpaceStatusData = 'WAITING' | 'RUNNING' | 'FEEDBACK' | 'FINISH';
export type TestCaseType = 'BASE' | 'CUSTOM';

export interface SpaceListData {
  status?: string;
  languageIds?: string;
  joinable?: boolean;
  keyword?: string;
  lastId?: number;
}

export interface SpaceLanguageData {
  languageId: number;
  languageName: string;
  languageImageUrl: string;
}

export interface SpaceData {
  id: number;
  joinedMe: boolean;
  name: string;
  language: SpaceLanguageData;
  totalUserCount: number;
  createdAt: string;
  status: string;
  activeUsers: UserRoleData[];
}

export interface SpaceFormData extends Record<string, string | number[]> {
  totalUserCount: number[];
  timerTime: string;
  name: string;
  languageId: number[];
  description: string;
}

export interface TestCaseIO {
  input?: string;
  output?: string;
}

export interface SubmitTestCase {
  input?: string;
  output?: string;
  testCaseId?: number | string;
}

export interface TestCaseData {
  input?: string;
  output?: string;
  testCaseId?: number | string;
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

export interface CreateSpaceData {
  studyId: number;
  name: string;
  timerTime: number;
  workbookUrl: string;
  totalUserCount: number;
  languageId: number;
  description: string;
  testcases: TestCaseIO[];
}

export interface ActiveTab {
  tabId?: string;
  documentKey?: string;
  userId?: number;
  nickname?: string;
  profileImageUrl?: string;
  role?: 'HOST' | 'MEMBER';
  myTab?: boolean;
  code?: string;
}

export interface Execution {
  codingSpaceTabId: string;
  language: string;
  code: string;
  input: string;
}

export interface SendCode {
  codingSpaceId: string;
  code: { code: string };
}
