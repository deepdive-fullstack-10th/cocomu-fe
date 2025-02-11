import { BsCamera } from 'react-icons/bs';
import S from './style';

type ProfileImageSize = 'sm' | 'md' | 'lg';

type ProfileImageProps = {
  src: string;
  size: ProfileImageSize;
  upload?: boolean;
  border?: boolean;
};

export default function ProfileImage({ src, size, upload, border }: ProfileImageProps) {
  return (
    <S.ProfileImageContainer
      size={size}
      border={border}
    >
      <S.ProfileImage
        src={src}
        alt='유저 프로필 이미지'
      />
      {upload && (
        <S.UploadButton size={size}>
          <BsCamera />
        </S.UploadButton>
      )}
    </S.ProfileImageContainer>
  );
}
