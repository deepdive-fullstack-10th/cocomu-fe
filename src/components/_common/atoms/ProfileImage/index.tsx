import { BsCamera } from 'react-icons/bs';
import S from './style';

type ProfileImageSize = 'lg' | 'md' | 'sm';

type ProfileImageProps = {
  src: string;
  size: ProfileImageSize;
  upload: boolean;
};

export default function ProfileImage({ src, size, upload }: ProfileImageProps) {
  return (
    <S.ProfileImageContainer
      size={size}
      upload={upload}
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
