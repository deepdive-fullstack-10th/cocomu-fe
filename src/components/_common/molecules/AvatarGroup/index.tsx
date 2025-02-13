import ProfileImage from '@components/_common/atoms/ProfileImage';
import S, { AvatarGroupSize } from './style';

type User = {
  id: number;
  nickName: string;
  profileImageUrl: string;
};

interface AvatarGroupProps {
  users: User[];
  size?: AvatarGroupSize;
}

export default function AvatarGroup({ users, size = 'sm' }: AvatarGroupProps) {
  return (
    <S.AvatarGroupContainer>
      {users.map((user, index) => (
        <S.ProfileWrapper
          key={user.id}
          index={index}
          size={size}
        >
          <ProfileImage
            src={user.profileImageUrl}
            border
            size={size}
          />
          <S.Nickname>{user.nickName}</S.Nickname>
        </S.ProfileWrapper>
      ))}
    </S.AvatarGroupContainer>
  );
}
