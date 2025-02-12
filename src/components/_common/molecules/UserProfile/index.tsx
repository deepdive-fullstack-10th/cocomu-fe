import ProfileImage from '@components/_common/atoms/ProfileImage';
import S, { UserProfileSize } from './style';

interface UserProfileProps {
  name: string;
  src?: string;
  size?: UserProfileSize;
  upload?: boolean;
  border?: boolean;
  onClick?: () => void;
}

export default function UserProfile({ name, src, size = 'md', upload, border, onClick }: UserProfileProps) {
  return (
    <S.UserProfileContainer onClick={onClick}>
      <ProfileImage
        size={size}
        src={src}
        upload={upload}
        border={border}
      />
      <S.ProfileLabelName size={size}>{name}</S.ProfileLabelName>
    </S.UserProfileContainer>
  );
}
