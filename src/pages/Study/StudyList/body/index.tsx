import StudyCard from '@components/StudyCard';
import { StudyData } from '@customTypes/study';
import * as S from './style';

const mockStudies: StudyData[] = Array.from({ length: 100 }, (_, index) => ({
  id: index,
  joinable: index % 2 === 0,
  name: `스터디 ${index + 1}`,
  status: (index % 2 === 0 ? 'PUBLIC' : 'PRIVATE') as 'PUBLIC' | 'PRIVATE',
  languages: ['Python', 'JavaScript', 'Java', 'C'],
  judges: ['백준', '프로그래머스'],
  description: '이 스터디는 프론트엔드 개발을 중심으로 진행됩니다.',
  currentUserCount: index + 1,
  totalUserCount: 10,
  createdAt: '2025-02-21',
  leader: {
    id: index,
    nickName: '홍길동',
    profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
  },
}));

export default function StudyListBody() {
  const studies: StudyData[] = mockStudies; // Mock 데이터를 사용

  return (
    <S.BodyContainer>
      {studies.map((study) => (
        <StudyCard
          key={study.id}
          {...study}
        />
      ))}
    </S.BodyContainer>
  );
}
