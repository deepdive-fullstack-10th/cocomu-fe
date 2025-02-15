export interface UserData {
  id: number;
  name: string;
  profileImageUrl: string;
}

export interface UserDetailData extends UserData {
  successCount: number;
  failedCount: number;
  joinedDate: string;
}
