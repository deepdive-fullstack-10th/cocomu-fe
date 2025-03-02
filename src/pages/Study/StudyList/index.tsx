import { useState } from 'react';

import PageButton from 'src/components/_common/molecules/PageButton';
import StudyCard from 'src/components/Study/StudyCard';
import useGetStudyList from '@hooks/study/useGetStudyList';
import Loading from '@pages/Loading';
import FilterTab from './FilterTab';
import S from './style';

export default function StudyList() {
  const [filters, setFilters] = useState({
    page: 1,
    status: undefined as string | undefined,
    languages: [] as string[],
    judges: [] as string[],
    joinable: false,
    keyword: '',
  });

  const { data, isLoading } = useGetStudyList(filters);

  return (
    <S.Container>
      <FilterTab
        filters={filters}
        setFilters={setFilters}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <S.Body>
            {data.studies.map((study) => (
              <StudyCard
                key={study.id}
                {...study}
              />
            ))}
          </S.Body>
          <S.Footer>
            <PageButton
              totalPage={data.totalPage}
              currentPage={filters.page}
              setPage={(page) => setFilters((prev) => ({ ...prev, page }))}
            />
          </S.Footer>
        </>
      )}
    </S.Container>
  );
}
