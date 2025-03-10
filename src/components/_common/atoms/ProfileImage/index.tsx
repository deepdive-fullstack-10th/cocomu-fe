import { BsCamera } from 'react-icons/bs';
import S, { ProfileImageStyleProps } from './style';
import Icon from '../Icon';

export interface ProfileImageProps extends ProfileImageStyleProps {
  src?: string;
  upload?: boolean;
}

export default function ProfileImage({
  src = 'https://cdn.cocomu.co.kr/images/default/profile.png',
  size = 'md',
  upload = false,
  border = false,
}: ProfileImageProps) {
  const handleUploadClick = () => {
    /* todo: 업로드 버튼 클릭 시 이벤트 함수 */
  };

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
        <S.UploadButton
          size={size}
          onClick={handleUploadClick}
        >
          <Icon
            size='md'
            color='50'
          >
            <BsCamera />
          </Icon>
        </S.UploadButton>
      )}
    </S.ProfileImageContainer>
  );
}
