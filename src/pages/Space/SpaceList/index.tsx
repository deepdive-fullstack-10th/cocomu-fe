import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetSpaceList from '@hooks/space/useGetSpaceList';
import useScroll from '@hooks/utils/useScroll';
import LoadingSpinner from '@components/_common/atoms/LoadingSpinner';
import SpaceCard from '@components/Space/SpaceCard';
import SpaceFilterTab from '@pages/Space/SpaceList/SpaceFilterTab';
import { SPACE_STATUS_MAP_ID } from '@constants/common';
import { SpaceData } from '@customTypes/space';
import EmptyResult from '@components/_common/atoms/EmptyResult';
import S from './style';

export default function SpaceList() {
  const [filters, setFilters] = useState({
    status: [],
    languageIds: [],
    joinable: undefined,
    keyword: '',
  });
  const [keyword, setKeyword] = useState('');
  const { studyId } = useParams<{ studyId: string }>();

  const getTransformedFilters = () => ({
    status: filters.status.length > 0 ? SPACE_STATUS_MAP_ID[filters.status[0]] : undefined,
    languageIds: filters.languageIds.length > 0 ? filters.languageIds.join(',') : undefined,
    joinable: filters.joinable,
    keyword: filters.keyword.trim() || undefined,
  });

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetSpaceList({
    studyId,
    params: getTransformedFilters(),
  });

  const { observerRef } = useScroll({
    nextPage: hasNextPage,
    fetchingNextPage: isFetchingNextPage,
    fetchNext: fetchNextPage,
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <S.Container>
      <SpaceFilterTab
        studyId={studyId}
        filters={filters}
        keyword={keyword}
        setFilters={setFilters}
        setKeyword={setKeyword}
      />

      {!data?.pages.some((page) => page.codingSpaces.length > 0) && <EmptyResult />}
      <S.SpaceListContainer>
        {data?.pages.flatMap((page) =>
          page.codingSpaces.map((space: SpaceData) => (
            <SpaceCard
              key={space.id}
              {...space}
              studyId={Number(studyId)}
            />
          )),
        )}
      </S.SpaceListContainer>

      {hasNextPage && <S.Sentinel ref={observerRef}>{isFetchingNextPage && <LoadingSpinner />}</S.Sentinel>}
    </S.Container>
  );
}
