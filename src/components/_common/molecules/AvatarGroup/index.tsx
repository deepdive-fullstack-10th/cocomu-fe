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
    <S.AvartarGroupContainer>
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
          <S.NickName>{user.nickName}</S.NickName>
        </S.ProfileWrapper>
      ))}
    </S.AvartarGroupContainer>
  );
}
