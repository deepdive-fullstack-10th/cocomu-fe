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
import { useModalStore } from '@stores/useModalStore';
import { ROUTES } from '@constants/path';
import S from './style';

export default function StudyParticipation() {
  const navigate = useNavigate();
  const { open, close } = useModalStore();
  const { studyId } = useParams<{ studyId: string }>();
  const { data, isLoading } = useGetStudyInfo(studyId!);

  if (isLoading) return <Loading />;

  const { name, status, createdAt, description, languages, workbooks, totalUserCount, leader } = data;

  const navigateToStudy = (id: string) => navigate(ROUTES.STUDY.DETAIL({ studyId: id }));

  const handleJoinClick = () => {
    if (status === 'PUBLIC') {
      open('confirm', {
        studyId: String(studyId), // 🔹 확실히 string으로 변환
        name,
        onClose: close,
        navigateToStudy,
      });
    } else {
      open('passwordInput', { studyId: String(studyId) }); // 🔹 여기서도 변환
    }
  };

  return (
    <S.Container>
      <S.Header>
        <IconButton
          align='left'
          color='white'
          shape='round'
          content='다른 스터디 보러가기'
        >
          <BsArrowLeft />
        </IconButton>
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
          <Tag color='secondary'>{totalUserCount} 명</Tag>
          <S.TagText>시작 날짜</S.TagText>
          <Tag color='triadic'>{formatDate(createdAt) || '정보 없음'}</Tag>
          <S.TagText>주력 언어</S.TagText>
          <TagList
            items={languages.length > 0 ? languages : ['정보 없음']}
            color='analogous'
          />
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
    </S.Container>
  );
}
