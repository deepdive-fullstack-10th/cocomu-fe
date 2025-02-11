import ProfileImage from '@components/_common/atoms/ProfileImage';
import S, { UserProfileSize } from './style';

interface UserProfileProps {
  name: string;
  src?: string;
  size?: UserProfileSize;
  upload?: boolean;
  border?: boolean;
}

export default function UserProfile({ name, src, size = 'md', upload, border }: UserProfileProps) {
  return (
    <S.UserProfileContainer>
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
