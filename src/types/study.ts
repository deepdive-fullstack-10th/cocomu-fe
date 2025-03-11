import { FilterData } from './common';
import { UserData } from './user';

export type StudyStatusData = 'PUBLIC' | 'PRIVATE';

export interface StudyData {
  id: number;
  joinable: boolean;
  name: string;
  status: string;
  languages: FilterData[];
  workbooks: FilterData[];
  description: string;
  currentUserCount: number;
  totalUserCount: number;
  createdAt: string;
  leader: UserData;
}

export interface StudyFormData extends Record<string, string | number[] | boolean> {
  name: string;
  password: string;
  totalUserCount: string;
  languages: number[];
  workbooks: number[];
}

export interface CreateStudyData extends StudyFormData {
  description: string;
}

export interface EditStudyData extends CreateStudyData {
  publicStudy: boolean;
}

export interface GetListData {
  page?: number;
  status?: string;
  languages?: string;
  workbooks?: string;
  joinable?: boolean;
  keyword?: string;
}
