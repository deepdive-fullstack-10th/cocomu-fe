export interface UserData {
  id: number;
  nickname: string;
  profileImageUrl: string;
}

export interface UserDetailData extends UserData {
  successCount: number;
  failedCount: number;
  joinedDate: string;
}
