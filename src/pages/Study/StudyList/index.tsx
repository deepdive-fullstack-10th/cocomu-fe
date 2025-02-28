import { useState } from 'react';
import PageButton from 'src/components/_common/molecules/PageButton';
import StudyCard from 'src/components/Study/StudyCard';
import useGetStudyList from '@hooks/useGetStudyList';
import FilterTab from './FilterTab';
import * as S from './style';

export default function StudyList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [status, setStatus] = useState<string | undefined>(undefined);
  const [languages, setLanguages] = useState<string[]>([]);
  const [judges, setJudges] = useState<string[]>([]);
  const [joinable, setJoinable] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const { data: studies = [] } = useGetStudyList({
    queryParams: {
      page: currentPage,
      status,
      languages,
      judges,
      joinable,
      keyword,
    },
    onTotalItemsChange: (newTotalPage) => {
      if (newTotalPage !== totalPage) {
        setTotalPage(newTotalPage || 1);
      }
    },
  });

  return (
    <S.Container>
      <FilterTab
        onStatusChange={setStatus}
        onLanguagesChange={setLanguages}
        onJudgesChange={setJudges}
        onJoinableChange={setJoinable}
        onKeywordChange={setKeyword}
      />
      <S.BodyContainer>
        {studies.map((study) => (
          <StudyCard
            key={study.id}
            {...study}
          />
        ))}
      </S.BodyContainer>
      <S.FooterContainer>
        <PageButton
          pages={totalPage}
          onPageChange={handlePageChange}
        />
      </S.FooterContainer>
    </S.Container>
  );
}
