import { useState } from 'react';

import useGetStudyList from '@hooks/study/useGetStudyList';
import { StudyData } from '@customTypes/study';

import { ACCESS_STATUS_MAP_ID } from '@constants/constants';

import PageButton from 'src/components/_common/molecules/PageButton';
import StudyCard from 'src/components/Study/StudyCard';
import Loading from '@pages/Loading';
import StudyFilterTab from './StudyFilterTab';

import S from './style';

export default function StudyList() {
  const [filters, setFilters] = useState({
    page: 1,
    status: [],
    languages: [],
    workbooks: [],
    joinable: undefined,
    keyword: '',
  });
  const [keyword, setKeyword] = useState('');

  const getTransformedFilters = () => ({
    page: filters.page,
    status: filters.status.length > 0 ? ACCESS_STATUS_MAP_ID[filters.status[0]] : undefined,
    languages: filters.languages.length > 0 ? filters.languages.join(',') : undefined,
    workbooks: filters.workbooks.length > 0 ? filters.workbooks.join(',') : undefined,
    joinable: filters.joinable,
    keyword: filters.keyword.trim() || undefined,
  });

  const { data, isLoading } = useGetStudyList(getTransformedFilters());

  return (
    <S.Container>
      <StudyFilterTab
        filters={filters}
        keyword={keyword}
        setFilters={setFilters}
        setKeyword={setKeyword}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <S.Body>
            {data.studies.map((study: StudyData) => (
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
