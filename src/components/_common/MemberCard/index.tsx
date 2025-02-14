import UserProfile from '@components/_common/molecules/UserProfile';
import { formatDate } from '@utils/formatDate';
import { User } from '@customTypes/user';
import S from './style';

interface MemberCardProps {
  user: User;
  successCount: number;
  failedCount: number;
  joinedDate: string;
}

export default function MemberCard({ user, successCount, failedCount, joinedDate }: MemberCardProps) {
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
