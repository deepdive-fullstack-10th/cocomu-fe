  id: number;
  joinedSpace: boolean;
  name: string;
  language: string;
  totalUserCount: number;
  createdAt: string;
  status: keyof typeof STEP_INFO;
  leader: User;
  currentUsers: User[];
  onClick?: () => void;
  id,
  joinedSpace,
  name,
  language,
  totalUserCount,
  createdAt,
  status,
  leader,
  currentUsers,
  onClick,
