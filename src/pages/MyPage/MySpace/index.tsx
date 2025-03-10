import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '@components/_common/atoms/LoadingSpinner';
import { SpaceData } from '@customTypes/space';
import SpaceCard from '@components/Space/SpaceCard';
import useGetSpaceList from '@hooks/user/useGetJoinedSpaceList';
import S from './style';

export default function MySpace() {
  const observerRef = useRef(null);
  const { userId } = useParams<{ userId: string }>();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetSpaceList({
    userId,
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

  return (
    <S.Container>
      <S.SpaceListContainer>
        {data?.pages.map(
          (page) =>
            page.codingSpaces.map((space: SpaceData) => (
              <SpaceCard
                key={space.id}
                {...space}
              />
            )),
          // eslint-disable-next-line function-paren-newline
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
