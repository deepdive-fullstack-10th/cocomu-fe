import { useNavigate } from 'react-router-dom';

import { useModalStore } from '@stores/useModalStore';

import { STEP_INFO } from '@constants/common';
import { ROUTES } from '@constants/path';

import { formatDate } from '@utils/formatDate';

import { SpaceData } from '@customTypes/space';

import UserProfile from '@components/_common/molecules/UserProfile';
import AvatarGroup from '@components/_common/molecules/AvatarGroup';
import ImageTag from '@components/_common/atoms/ImageTag';
import Tag from '@components/_common/atoms/Tag';

import S from './style';

interface SpaceCardProps extends SpaceData {
  studyId: number;
}

export default function SpaceCard({
  id,
  joinedMe,
  name,
  language,
  totalUserCount,
  createdAt,
  status,
  currentUsers,
  studyId,
}: SpaceCardProps) {
  const navigate = useNavigate();
  const { open } = useModalStore();

  const { label, color } = STEP_INFO[status];

  const handleCardClick = () => {
    if (joinedMe) {
      navigate(ROUTES.SPACE.ENTER({ studyId, codingSpaceId: id }));
      return;
    }

    open('confirm', {
      isSpace: true,
      studyId,
      codingSpaceId: id,
      name,
      navigate: (codingSpaceId: number) => navigate(ROUTES.SPACE.ENTER({ studyId, codingSpaceId })),
    });
  };

  const leader = currentUsers
    .filter((user) => user.role === 'HOST')
    .map(({ id: leaderId, nickname, profileImageUrl }) => ({
      id: leaderId,
      nickname,
      profileImageUrl,
    }))[0];

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
          <ImageTag imageUrl={language.imageUrl} />
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
