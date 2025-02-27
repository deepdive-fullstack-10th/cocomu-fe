import StudyCard from 'src/components/Study/StudyCard';
import useStudyList from '@hooks/useStudyList';
import * as S from './style';

interface StudyListBodyProps {
  currentPage: number;
  status?: string;
  languages?: string[];
  judges?: string[];
  joinable?: boolean;
  keyword?: string;
  onTotalItemsChange: (totalPage: number) => void;
}

export default function Body({
  currentPage,
  status,
  languages,
  judges,
  joinable,
  keyword,
  onTotalItemsChange,
}: StudyListBodyProps) {
  const {
    data: studies = [],
    isLoading,
    error,
  } = useStudyList({
    queryParams: {
      page: currentPage,
      status,
      languages,
      judges,
      joinable,
      keyword,
    },
    onTotalItemsChange: (totalPage: number) => {
      onTotalItemsChange(totalPage);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>스터디 데이터를 불러오는데 실패했습니다.</div>;

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
