import ProfileImage, { ProfileImageProps } from '@components/_common/atoms/ProfileImage';
import { User } from '@customTypes/user';
import S from './style';

interface UserProfileProps extends ProfileImageProps {
  user: User;
  onClick?: () => void;
}

export default function UserProfile({ user, size = 'md', upload, border, onClick }: UserProfileProps) {
  return (
    <S.UserProfileContainer onClick={onClick}>
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
