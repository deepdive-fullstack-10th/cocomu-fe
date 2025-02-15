import { UserData } from './user';

export type SpaceStatusData = 'WAITING' | 'IN_PROGRESS' | 'FEEDBACK' | 'COMPLETED';

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
