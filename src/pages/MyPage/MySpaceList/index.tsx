import { useParams } from 'react-router-dom';

import useGetUserSpaceList from '@hooks/user/useGetUserSpaceList';
import useScroll from '@hooks/utils/useScroll';

import LoadingSpinner from '@components/_common/atoms/LoadingSpinner';
import EmptyResult from '@components/_common/atoms/EmptyResult';
import SpaceCard from '@components/Space/SpaceCard';
import InfiniteScrollSentinel from '@components/_common/molecules/InfiniteScrollSentinel';

import { SpaceData } from '@customTypes/space';

import S from './style';

export default function MySpaceList() {
  const { userId } = useParams<{ userId: string }>();

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGetUserSpaceList(userId);

  const { observerRef } = useScroll({
    nextPage: hasNextPage,
    fetchingNextPage: isFetchingNextPage,
    fetchNext: fetchNextPage,
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <S.Container>
      {!data?.pages.some((page) => page.result.length > 0) && <EmptyResult />}
      <S.SpaceList>
        {data?.pages.flatMap((page) =>
          page.result.map((space: SpaceData) => (
            <SpaceCard
              key={space.id}
              {...space}
            />
          )),
        )}
      </S.SpaceList>

      <InfiniteScrollSentinel
        observerRef={observerRef}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </S.Container>
  );
}
