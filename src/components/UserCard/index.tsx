import UserProfile from '@components/_common/molecules/UserProfile';
import { formatDate } from '@utils/formatDate';
import { UserDetailData } from '@customTypes/user';
import S from './style';

export default function UserCard({
  id,
  nickname,
  profileImageUrl,
  role,
  joinedSpaceCount,
  joinedDate,
}: UserDetailData) {
  const user = { id, nickname, profileImageUrl };

  const handleUserClick = () => {
    // id 사용해서 마이페이지로 이동
  };

  return (
    <S.CardContainer
      onClick={handleUserClick}
      role={role}
    >
      <UserProfile
        user={user}
        size='md'
      />
      <S.Info>
        <S.Text role={role}>{role}</S.Text>
        <S.Text>{`참여한 스페이스 수 : ${joinedSpaceCount}`}</S.Text>
        <S.Text>{`가입일 : ${formatDate(joinedDate)}`}</S.Text>
      </S.Info>
    </S.CardContainer>
  );
}
