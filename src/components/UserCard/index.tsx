import UserProfile from '@components/_common/molecules/UserProfile';
import { formatDate } from '@utils/formatDate';
import { UserDetailData } from '@customTypes/user';
import S from './style';

export default function UserCard({
  id,
  nickname,
  profileImageUrl,
  successCount,
  failedCount,
  joinedDate,
}: UserDetailData) {
  const user = { id, nickname, profileImageUrl };

  const handleUserClick = () => {
    // id 사용해서 마이페이지로 이동
  };

  return (
    <S.CardContainer onClick={handleUserClick}>
      <UserProfile
        user={user}
        size='md'
      />
      <S.Info>
        <S.Text>{`해결한 문제 수 : ${successCount}개`}</S.Text>
        <S.Text>{`실패한 문제 수 : ${failedCount}개`}</S.Text>
        <S.Text>{`가입일 : ${formatDate(joinedDate)}`}</S.Text>
      </S.Info>
    </S.CardContainer>
  );
}
