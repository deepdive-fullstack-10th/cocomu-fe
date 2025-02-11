import { BsPerson } from 'react-icons/bs';
import { ACCESS_STATUS } from '@constants/constants';
import Tag from '../atoms/Tag';
import ImageTag from '../atoms/ImageTag';
import S from './style';

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
  const handleClick = () => {
    // id 사용해서 상세페이지로 이동
  };

  return (
    <S.CardContainer onClick={handleClick}>
      <S.Header>
        <Tag color={status === 'PUBLIC' ? 'analogous' : 'triadic'}>{ACCESS_STATUS[status]}</Tag>
        <S.Date>{createdAt}</S.Date>
      </S.Header>

      <S.Body>
        <S.Title>{name}</S.Title>
        <S.Description>{description}</S.Description>
        <S.TagWrapper>
          {judges.map((judge) => (
            <Tag
              key={judge}
              color='gray'
            >
              {judge}
            </Tag>
          ))}
        </S.TagWrapper>
        <S.TagWrapper>
          {languages.map((language) => (
            <ImageTag
              key={language}
              name={language}
            />
          ))}
        </S.TagWrapper>
      </S.Body>

      <S.Footer>
        {/* 프로필 */}
        <S.ParticipantInfo>
          <BsPerson size={14} />
          {`${currentUserCount} / ${totalUserCount}`}
        </S.ParticipantInfo>
      </S.Footer>
    </S.CardContainer>
  );
}
