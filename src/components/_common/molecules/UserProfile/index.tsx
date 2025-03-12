import { useNavigate } from 'react-router-dom';
import ProfileImage, { ProfileImageProps } from '@components/_common/atoms/ProfileImage';
import { UserData } from '@customTypes/user';
import { ROUTES } from '@constants/path';
import S from './style';

interface UserProfileProps extends ProfileImageProps {
  user: UserData;
}

export default function UserProfile({ user, size = 'md', upload, border }: UserProfileProps) {
  const navigate = useNavigate();

  const handleUserClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    navigate(ROUTES.MYPAGE.ROOT({ userId: user.id }));
  };

  return (
    <S.UserProfileContainer onClick={handleUserClick}>
      <ProfileImage
        size={size}
        src={user.profileImageUrl}
        upload={upload}
        border={border}
      />
      <S.ProfileLabelName size={size}>{user.nickname}</S.ProfileLabelName>
    </S.UserProfileContainer>
  );
}
