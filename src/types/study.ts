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
