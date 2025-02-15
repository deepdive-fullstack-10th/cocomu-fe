import UserProfile from '@components/_common/molecules/UserProfile';
import ImageTag from '@components/_common/atoms/ImageTag';
import Tag from '@components/_common/atoms/Tag';
import AvatarGroup from '@components/_common/molecules/AvatarGroup';
import { STEP_INFO } from '@constants/constants';
import { formatDate } from '@utils/formatDate';
import { User } from '@customTypes/user';
import S from './style';

interface SpaceCardProps {
  id: number;
  joinedSpace: boolean;
  name: string;
  language: string;
  totalUserCount: number;
  createdAt: string;
  status: keyof typeof STEP_INFO;
  leader: User;
  currentUsers: User[];
  onClick?: () => void;
}

export default function SpaceCard({
  id,
  joinedSpace,
  name,
  language,
  totalUserCount,
  createdAt,
  status,
  leader,
  currentUsers,
  onClick,
}: SpaceCardProps) {
  const { label, color } = STEP_INFO[status];

  return (
    <S.CardContainer onClick={onClick}>
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
