import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { BsThreeDotsVertical } from 'react-icons/bs';
import UserProfile from '@components/_common/molecules/UserProfile';
import Tag from '@components/_common/atoms/Tag';
import TagList from '@components/_common/molecules/TagList';
import Button from '@components/_common/atoms/Button';
import DropdownItem from '@components/_common/atoms/DropdownItem';
import useGetStudyInfo from '@hooks/study/useGetStudyInfo';
import { formatDate } from '@utils/formatDate';
import { ROUTES } from '@constants/path';
import S from './style';

interface StudyContext {
  studyId: string;
  isLeader: boolean;
}

export default function StudyInfo() {
  const navigate = useNavigate();
  const { studyId, isLeader } = useOutletContext<StudyContext>();
  const { data } = useGetStudyInfo(studyId);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const {
    name = '스터디 불러오는 중...',
    status = 'PRIVATE',
    createdAt = '',
    description = '설명 없음',
    languages = [],
    workbooks = [],
    totalUserCount = 0,
    leader = {
      id: 0,
      nickName: '알 수 없음',
      profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
    },
  } = data || {};

  const handleNavigateToEdit = () => {
    navigate(ROUTES.STUDY.EDIT({ studyId }));
  };

  return (
    <S.Container>
      <S.Header>
        <UserProfile
          user={leader}
          size='md'
        />
        {isLeader ? (
          <S.IconContainer>
            <BsThreeDotsVertical onClick={() => setDropdownOpen(!dropdownOpen)} />
            {dropdownOpen && (
              <S.Dropdown>
                <DropdownItem
                  item='스터디 수정하기'
                  size='lg'
                  onClick={handleNavigateToEdit}
                />
                <DropdownItem
                  item='스터디 삭제하기'
                  color='triadic'
                  size='lg'
                  onClick={() => console.log('스터디 삭제 클릭')}
                />
              </S.Dropdown>
            )}
          </S.IconContainer>
        ) : (
          <Button
            color='triadic'
            size='md'
            onClick={() => console.log('스터디 나가기 클릭')}
          >
            스터디 나가기
          </Button>
        )}
      </S.Header>
      <S.BodyContainer>
        <S.StudyTitle>{name}</S.StudyTitle>
        <S.TagContainer>
          <S.TagText>공개 여부</S.TagText>
          <Tag color='primary'>{status === 'PUBLIC' ? '공개' : '비공개'}</Tag>
          <S.TagText>모집 인원</S.TagText>
          <Tag color='secondary'>
            {totalUserCount}
            {' 명'}
          </Tag>
          <S.TagText>시작 날짜</S.TagText>
          <Tag color='triadic'>{formatDate(createdAt) || '정보 없음'}</Tag>
          <div />
          <div />
          <S.TagText>주력 언어</S.TagText>
          <TagList
            items={languages.length > 0 ? languages : ['정보 없음']}
            color='analogous'
          />
          <div />
          <div />
          <S.TagText>사용 플랫폼</S.TagText>
          <TagList
            items={workbooks.length > 0 ? workbooks : ['정보 없음']}
            color='gray'
          />
        </S.TagContainer>
        <S.ProjectIntro>프로젝트 소개</S.ProjectIntro>
        <S.Description>{description}</S.Description>
      </S.BodyContainer>
    </S.Container>
  );
}
