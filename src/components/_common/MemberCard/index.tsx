import UserProfile from '@components/_common/molecules/UserProfile';
import { formatDate } from '@utils/formatDate';
import S from './style';

interface MemberCardProps {
  name: string;
  profileImageUrl?: string;
  successCount: number;
  failedCount: number;
  joinedDate: Date;
}

export default function MemberCard({
  name,
  profileImageUrl = 'https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg',
  successCount,
  failedCount,
  joinedDate,
}: MemberCardProps) {
  return (
    <S.CardContainer>
      <UserProfile
        name={name}
        src={profileImageUrl}
        size='sm'
      />
      <S.ProfileContainer>
        <S.ProfileItem>
          <S.ProfileLabel>해결한 문제 수 :</S.ProfileLabel>
          <S.ProfileValue>{`${successCount}개`}</S.ProfileValue>
        </S.ProfileItem>
        <S.ProfileItem>
          <S.ProfileLabel>실패한 문제 수 :</S.ProfileLabel>
          <S.ProfileValue>{`${failedCount}개`}</S.ProfileValue>
        </S.ProfileItem>
        <S.ProfileItem>
          <S.ProfileLabel>가입일 :</S.ProfileLabel>
          <S.ProfileValue>{formatDate(joinedDate)}</S.ProfileValue>
        </S.ProfileItem>
      </S.ProfileContainer>
    </S.CardContainer>
  );
}
