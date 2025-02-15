import ProfileImage, { ProfileImageProps } from '@components/_common/atoms/ProfileImage';
import { User } from '@customTypes/user';
import S from './style';

interface UserProfileProps extends ProfileImageProps {
  user: User;
}

export default function UserProfile({ user, size = 'md', upload, border }: UserProfileProps) {
  const handleUserClick = () => {
    // user.id 사용해서 마이페이지로 이동
  };

  return (
    <S.UserProfileContainer onClick={handleUserClick}>
      <ProfileImage
        size={size}
        src={user.profileImageUrl}
        upload={upload}
        border={border}
      />
      <S.ProfileLabelName size={size}>{user.name}</S.ProfileLabelName>
    </S.UserProfileContainer>
  );
}
