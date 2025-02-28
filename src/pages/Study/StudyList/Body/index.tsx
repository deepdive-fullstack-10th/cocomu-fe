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
  const { data: studies = [] } = useStudyList({
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
