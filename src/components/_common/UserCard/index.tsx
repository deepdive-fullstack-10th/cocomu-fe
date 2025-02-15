import UserProfile from '@components/_common/molecules/UserProfile';
import { formatDate } from '@utils/formatDate';
import { UserDetailData } from '@customTypes/user';
import S from './style';

export default function UserCard({ id, name, profileImageUrl, successCount, failedCount, joinedDate }: UserDetailData) {
  const user = { id, name, profileImageUrl };

  return (
    <S.CardContainer>
      <UserProfile
        user={user}
        size='sm'
      />
      <S.ProfileContainer>
        <S.ProfileText>{`해결한 문제 수: ${successCount}개`}</S.ProfileText>
        <S.ProfileText>{`실패한 문제 수: ${failedCount}개`}</S.ProfileText>
        <S.ProfileText>{`가입일: ${formatDate(joinedDate)}`}</S.ProfileText>
      </S.ProfileContainer>
    </S.CardContainer>
  );
}
