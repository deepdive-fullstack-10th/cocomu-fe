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
  return (
    <S.Container>
      {users.map((user, index) => (
        <UserTab
          key={user.id}
          color={tabColors[index % tabColors.length]}
          name={user.nickName}
          onClick={() => selectUser(user.id)}
        />
      ))}
    </S.Container>
  );
}
