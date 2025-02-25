import StudyCard from '@components/StudyCard';
import { StudyData } from '@customTypes/study';
import useStudyList from '@hooks/useStudyList';
import * as S from './style';

interface StudyListBodyProps {
  currentPage: number;
  itemsPerPage: number;
  onTotalItemsChange: (totalItems: number) => void;
}

export default function StudyListBody({ currentPage, itemsPerPage, onTotalItemsChange }: StudyListBodyProps) {
  const { studies } = useStudyList({ currentPage, itemsPerPage, onTotalItemsChange });

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
