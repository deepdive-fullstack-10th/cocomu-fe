export interface UserData {
  id: number;
  nickname: string;
  profileImageUrl: string;
}

export interface UserRoleData extends UserData {
  role: string;
}

export interface UserDetailData extends UserData {
  /* successCount: number;
  failedCount: number; */
  role: string;
  joinedDate: string;
  joinedSpaceCount: number;
}
