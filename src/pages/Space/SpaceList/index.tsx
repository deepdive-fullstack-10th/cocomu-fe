import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useGetSpaceList from '@hooks/space/useGetSpaceList';
import LoadingSpinner from '@components/_common/atoms/LoadingSpinner';
import SpaceCard from '@components/Space/SpaceCard';
import SpaceFilterTab from '@pages/Space/SpaceList/SpaceFilterTab';
import { SPACE_STATUS_MAP_ID } from '@constants/common';
import { SpaceData } from '@customTypes/space';
import { SpaceListParams } from '@customTypes/space';
import useScroll from '@hooks/utils/useScroll';
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

  const observerRef = useRef(null);

  const getTransformedFilters = () => ({
    status: filters.status.length > 0 ? SPACE_STATUS_MAP_ID[filters.status[0]] : undefined,
    languageIds: filters.languageIds.length > 0 ? filters.languageIds.join(',') : undefined,
    joinable: filters.joinable,
    keyword: filters.keyword.trim() || undefined,
  });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetSpaceList({
    studyId,
    params: getTransformedFilters(),
  });

  useEffect(() => {
    if (!observerRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 },
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);
  const { spaces, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } = useGetSpaceList(studyId, filters);
  const { observerRef, isFetching } = useScroll({
    nextPage: hasNextPage,
    fetchingNextPage: isFetchingNextPage,
    fetchNext: fetchNextPage,
  });

  return (
    <S.Container>
      <SpaceFilterTab
        studyId={studyId}
        filters={filters}
        keyword={keyword}
        setFilters={setFilters}
        setKeyword={setKeyword}
      />
      <S.SpaceListContainer>
        {data?.pages.map((page) =>
          page.codingSpaces.map((space: SpaceData) => (
            <SpaceCard
              key={space.id}
              {...space}
              studyId={Number(studyId)}
            />
          )),
        )}
      </S.SpaceListContainer>

      {hasNextPage && (
        <div
          ref={observerRef}
          style={{ height: '10px' }}
        />
      )}

      {isFetchingNextPage && <LoadingSpinner />}
    </S.Container>
  );
}
