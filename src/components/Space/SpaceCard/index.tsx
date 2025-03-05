import UserProfile from '@components/_common/molecules/UserProfile';
import ImageTag from '@components/_common/atoms/ImageTag';
import Tag from '@components/_common/atoms/Tag';
import AvatarGroup from '@components/_common/molecules/AvatarGroup';
import { STEP_INFO } from '@constants/constants';
import { formatDate } from '@utils/formatDate';
import { SpaceData } from '@customTypes/space';
import S from './style';

export default function SpaceCard({
  id,
  joinedMe,
  name,
  language,
  totalUserCount,
  createdAt,
  status,
  leader,
  currentUsers,
}: SpaceData) {
  const { label, color } = STEP_INFO[status];

  const handleCardClick = () => {
    // id 사용해서 상세페이지로 이동 (joinedSpace 조건)
  };

  return (
    <S.CardContainer onClick={handleCardClick}>
      <S.Header>
        <UserProfile
          user={leader}
          size='x_sm'
        />
        <Tag color={color}>{label}</Tag>
      </S.Header>
      <S.Body>
        <S.Text>{name}</S.Text>
        <S.Info>
          <ImageTag name={language} />
          <S.Text>{`최대 인원 : ${totalUserCount}명`}</S.Text>
          <S.Text>{`생성 일자 : ${formatDate(createdAt)}`}</S.Text>
          <AvatarGroup
            users={currentUsers}
            size='sm'
          />
        </S.Info>
      </S.Body>
    </S.CardContainer>
  );
}
