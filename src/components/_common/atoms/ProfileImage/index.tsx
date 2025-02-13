import { BsCamera } from 'react-icons/bs';
import S, { ProfileImageStyleProps } from './style';
import Icon from '../Icon';

interface ProfileImageProps extends ProfileImageStyleProps {
  src?: string;
  upload?: boolean;
}

export default function ProfileImage({
  src = 'https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg',
  size = 'md',
  upload = false,
  border = false,
}: ProfileImageProps) {
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
          <Icon
            size='sm'
            color='50'
            icon={<BsCamera />}
          />
        </S.UploadButton>
      )}
    </S.ProfileImageContainer>
  );
}
