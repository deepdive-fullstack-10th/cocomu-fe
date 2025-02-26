import StudyCard from 'src/components/Study/StudyCard';
import useStudyList from '@hooks/useStudyList';
import * as S from './style';

interface StudyListBodyProps {
  currentPage: number;
  itemsPerPage: number;
  status?: string;
  languages?: string[];
  judges?: string[];
  joinable?: boolean;
  keyword?: string;
  onTotalItemsChange: (totalItems: number) => void;
}

export default function Body({
  currentPage,
  itemsPerPage,
  status,
  languages,
  judges,
  joinable,
  keyword,
  onTotalItemsChange,
}: StudyListBodyProps) {
  const { studies } = useStudyList({
    currentPage,
    itemsPerPage,
    status,
    languages,
    judges,
    joinable,
    keyword,
    onTotalItemsChange,
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
