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

export interface StudyFormData extends Record<string, string | string[]> {
  name: string;
  password: string;
  totalUserCount: string;
  languages: string[];
  workbooks: string[];
}

export interface CreateStudyData extends StudyFormData {
  description: string;
}

export interface EditStudyData extends CreateStudyData {
  status: string;
}

export interface GetListParams {
  page?: number;
  status?: string;
  languages?: string;
  workbooks?: string;
  joinable?: boolean;
  keyword?: string;
}
