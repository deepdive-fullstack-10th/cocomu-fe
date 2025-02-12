import { BsPerson } from 'react-icons/bs';
import { ACCESS_STATUS } from '@constants/constants';
import Tag from '../atoms/Tag';
import S from './style';
import UserProfile from '../molecules/UserProfile';
import ImageTagList from '../molecules/ImageTagList';
import TagList from '../molecules/TagList';

interface StudyCardProps {
  id: number;
  name: string;
  status: string;
  languages: string[];
  judges: string[];
  description: string;
  currentUserCount: number;
  totalUserCount: number;
  createdAt: string;
  leaderId: number;
  leaderName: string;
  leaderProfileImage: string;
}

export default function StudyCard({
  id,
  name,
  status,
  languages,
  judges,
  description,
  currentUserCount,
  totalUserCount,
  createdAt,
  leaderId,
  leaderName,
  leaderProfileImage,
}: StudyCardProps) {
  const handleCardClick = () => {
    // id 사용해서 상세페이지로 이동
  };

  const handleLeaderClick = () => {
    // id 사용해서 상세페이지로 이동
  };

  return (
    <S.CardContainer onClick={handleCardClick}>
      <S.Header>
        <Tag color={status === 'PUBLIC' ? 'analogous' : 'triadic'}>{ACCESS_STATUS[status]}</Tag>
        <S.Date>{createdAt}</S.Date>
      </S.Header>

      <S.Body>
        <S.Title>{name}</S.Title>
        <S.Description>{description}</S.Description>
        <TagList
          items={judges}
          color='gray'
        />
        <ImageTagList items={languages} />
      </S.Body>

      <S.Footer>
        <UserProfile
          name={leaderName}
          src={leaderProfileImage}
          size='sm'
          onClick={handleLeaderClick}
        />
        <S.ParticipantInfo>
          <BsPerson size={20} />
          {`${currentUserCount} / ${totalUserCount}`}
        </S.ParticipantInfo>
      </S.Footer>
    </S.CardContainer>
  );
}
