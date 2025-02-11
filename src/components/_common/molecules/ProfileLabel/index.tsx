import ProfileImage from '@components/_common/atoms/ProfileImage';
import S, { ProfileLabelSize } from './style';

interface ProfileLabelProps {
  name: string;
  src?: string;
  size: ProfileLabelSize;
  upload?: boolean;
  border?: boolean;
}

export default function ProfileLabel({ name, src, size, upload, border }: ProfileLabelProps) {
  return (
    <S.ProfileLabelContainer>
      <ProfileImage
        size={size}
        src={src}
        upload={upload}
        border={border}
      />
      <S.ProfileLabelName size={size}>{name}</S.ProfileLabelName>
    </S.ProfileLabelContainer>
  );
}
