import { BsPerson } from 'react-icons/bs';
import { ACCESS_STATUS_MAP } from '@constants/constants';
import { StudyData } from '@customTypes/study';
import Tag from '@components/_common/atoms/Tag';
import UserProfile from '@components/_common/molecules/UserProfile';
import ImageTagList from '@components/_common/molecules/ImageTagList';
import TagList from '@components/_common/molecules/TagList';
import S from './style';

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
}: StudyData) {
  const handleCardClick = () => {
    // id 사용해서 상세페이지로 이동 (joinable 조건)
  };

  return (
    <S.CardContainer onClick={handleCardClick}>
      <S.Header>
        <Tag color={status === 'PUBLIC' ? 'analogous' : 'triadic'}>{ACCESS_STATUS_MAP[status]}</Tag>
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
