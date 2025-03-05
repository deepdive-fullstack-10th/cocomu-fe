import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import UserProfile from '@components/_common/molecules/UserProfile';
import Tag from '@components/_common/atoms/Tag';
import Button from '@components/_common/atoms/Button';
import IconButton from '@components/_common/atoms/IconButton';
import useGetStudyInfo from '@hooks/study/useGetStudyInfo';
import Loading from '@pages/Loading';
import { formatDate } from '@utils/formatDate';
import TagList from '@components/_common/molecules/TagList';
import TextEditor from '@components/_common/atoms/TextEditor';
import { ROUTES } from '@constants/path';
import ConfirmModal from '@components/Modal/Confirm';
import PasswordInput from '@components/Modal/PasswordInput';
import { useModalStore } from '@stores/useModalStore';
import S from './style';

export default function StudyParticipation() {
  const { open } = useModalStore();
  const navigate = useNavigate();
  const { studyId } = useParams<{ studyId: string }>();
  const { data, isLoading } = useGetStudyInfo(studyId);

  // 모달 상태 추가
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  if (isLoading) return <Loading />;

  /* TODO: 임시로 현재 로그인 한 user id 지정, 추후에 수정하기 */
  const { name, status, createdAt, description, languages, workbooks, totalUserCount, leader } = data;
  const parsedStudyId = studyId ? Number(studyId) : null;

  if (!data) {
    return <div>스터디 데이터를 불러오는 중입니다...</div>;
  }

  const handleNavigateToStudyList = () => {
    navigate(ROUTES.ROOT());
  };

  // 참여 버튼 클릭 핸들러

  const handleJoinClick = () => {
    console.log('참여하기 버튼 클릭됨! 상태:', status);

    if (status === 'PUBLIC') {
      console.log('ConfirmModal을 여는 중...');
      open('confirm', { studyId: Number(studyId), name });
    } else if (status === 'PRIVATE') {
      console.log('PasswordInput을 여는 중...');
      open('passwordInput', { studyId: Number(studyId) });
    }
  };

  return (
    <S.Container>
      <S.Header>
        <div>
          <IconButton
            align='left'
            color='white'
            shape='round'
            content='다른 스터디 보러가기'
            onClick={handleNavigateToStudyList}
          >
            <BsArrowLeft />
          </IconButton>
        </div>
      </S.Header>

      <S.BodyContainer>
        <UserProfile
          user={leader}
          size='md'
        />
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
        <S.StudyIntro>스터디 소개</S.StudyIntro>
        <TextEditor
          value={description}
          readOnly
        />
      </S.BodyContainer>

      <S.FooterContainer>
        <Button
          size='sm'
          color='primary'
          shape='default'
          onClick={handleJoinClick}
        >
          참여하기
        </Button>
      </S.FooterContainer>
      {showConfirmModal && (
        <>
          {console.log('ConfirmModal 렌더링됨')}
          <ConfirmModal
            studyId={parsedStudyId}
            codingSpaceId={null}
            name={name}
            onClose={() => setShowConfirmModal(false)}
          />
        </>
      )}

      {showPasswordModal && (
        <>
          {console.log('PasswordInput 렌더링됨')}
          <PasswordInput
            studyId={parsedStudyId}
            onClose={() => setShowPasswordModal(false)}
          />
        </>
      )}
    </S.Container>
  );
}
