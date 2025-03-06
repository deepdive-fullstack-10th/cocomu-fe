import UserCard from '@components/UserCard';
import S from './style';

export default function MemberList() {
  return (
    <S.UserCardContainer>
      <UserCard
        successCount={32}
        failedCount={2}
        joinedDate='2025.01.28'
        id={1}
        nickName='김서현'
        profileImageUrl='https://cdn.cocomu.co.kr/images/default/profile.png'
      />
      <UserCard
        successCount={32}
        failedCount={2}
        joinedDate='2025.01.28'
        id={2}
        nickName='김서현'
        profileImageUrl='https://cdn.cocomu.co.kr/images/default/profile.png'
      />
    </S.UserCardContainer>
  );
}
