import { useState } from 'react';
import { UserData } from '@customTypes/user';
import { UserTabColor } from './UserTab/style';
import UserTab from './UserTab';
import S from './style';

const tabColors: UserTabColor[] = ['primary', 'secondary', 'analogous', 'triadic'];

interface UserTabListProps {
  users: UserData[];
  selectUser?: (userId: number) => void;
}

export default function UserTabList({ users, selectUser }: UserTabListProps) {
  const [selectedUserId, setSelectedUserId] = useState<number>(users[0]?.id);

  const handleUserClick = (userId: number) => {
    setSelectedUserId(userId);
    selectUser?.(userId);
  };

  return (
    <S.Container>
      {users.map((user, index) => (
        <UserTab
          key={user.id}
          color={tabColors[index % tabColors.length]}
          name={user.nickname}
          isSelected={user.id === selectedUserId}
          onClick={() => handleUserClick(user.id)}
        />
      ))}
    </S.Container>
  );
}
