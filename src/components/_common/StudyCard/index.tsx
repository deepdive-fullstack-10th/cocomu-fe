import { BsPerson } from 'react-icons/bs';
import { ACCESS_STATUS } from '@constants/constants';
import { User } from '@customTypes/user';
import Tag from '../atoms/Tag';
import S from './style';
import UserProfile from '../molecules/UserProfile';
import ImageTagList from '../molecules/ImageTagList';
import TagList from '../molecules/TagList';

interface StudyCardProps {
  id: number;
  joinable: boolean;
  name: string;
  status: string;
  languages: string[];
  judges: string[];
  description: string;
  currentUserCount: number;
  totalUserCount: number;
  createdAt: string;
  leader: User;
}

export default function StudyCard({
  id,
  joinable,
  name,
  status,
  languages,
  judges,
  description,
  currentUserCount,
  totalUserCount,
  createdAt,
  leader,
}: StudyCardProps) {
  const handleCardClick = () => {
    // id 사용해서 상세페이지로 이동 (joinable 조건)
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
          user={leader}
          size='sm'
        />
        <S.ParticipantInfo>
          <BsPerson size={20} />
          {`${currentUserCount} / ${totalUserCount}`}
        </S.ParticipantInfo>
      </S.Footer>
    </S.CardContainer>
  );
}
