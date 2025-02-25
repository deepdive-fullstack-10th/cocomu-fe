import { JUDGES, PROGRAMMING_LANGUAGES } from '@constants/constants';
import { UserData } from './user';

export type StudyStatusData = 'PUBLIC' | 'PRIVATE';

export type ProgrammingLanguage = (typeof PROGRAMMING_LANGUAGES)[number];

export type Judges = (typeof JUDGES)[number];

export interface StudyData {
  id: number;
  joinable: boolean;
  name: string;
  status: StudyStatusData;
  languages: ProgrammingLanguage[];
  judges: Judges[];
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
  judges: string[];
}

export interface CreateStudyData extends StudyFormData {
  description: string;
}
