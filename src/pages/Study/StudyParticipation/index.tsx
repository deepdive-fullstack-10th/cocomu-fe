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
import S from './style';

export default function StudyParticipation() {
  const navigate = useNavigate();
  const { studyId } = useParams<{ studyId: string }>();
  const { data, isLoading } = useGetStudyInfo(studyId);

  if (isLoading) return <Loading />;

  /* TODO: 임시로 현재 로그인 한 user id 지정, 추후에 수정하기 */
  const loginedUserId = 1;
  const { name, status, createdAt, description, languages, workbooks, totalUserCount, leader } = data;
  const isLeader = loginedUserId === leader.id;

  if (!data) {
    return <div>스터디 데이터를 불러오는 중입니다...</div>;
  }

  return (
    <S.Container>
      <S.Header>
        <div>
          <IconButton
            align='left'
            color='white'
            shape='round'
            content='다른 스터디 보러가기'
            onClick={() => navigate(-1)}
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
          onClick={() => console.log('참여하기 클릭')}
        >
          참여하기
        </Button>
      </S.FooterContainer>
    </S.Container>
  );
}
