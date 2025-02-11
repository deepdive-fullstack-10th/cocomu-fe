import ProfileImage from '@components/_common/atoms/ProfileImage';
import S, { ProfileLabelSize } from './style';

interface ProfileLabelProps {
  name: string;
  src?: string;
  size: ProfileLabelSize;
}

export default function ProfileLabel({ name, src, size }: ProfileLabelProps) {
  return (
    <S.ProfileLabelContainer>
      <ProfileImage
        size={size}
        src={src}
      />
      <S.ProfileLabelName size={size}>{name}</S.ProfileLabelName>
    </S.ProfileLabelContainer>
  );
}
