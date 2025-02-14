import ProfileImage from '@components/_common/atoms/ProfileImage';
import { User } from '@customTypes/user';
import S, { UserProfileSize } from './style';

interface UserProfileProps {
  user: User;
  size?: UserProfileSize;
  upload?: boolean;
  border?: boolean;
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
      <S.ProfileLabelName size={size}>{user.nickName}</S.ProfileLabelName>
    </S.UserProfileContainer>
  );
}
