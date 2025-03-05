import SpaceCard from '@components/Space/SpaceCard';
import { useEffect, useRef, useState } from 'react';
import useGetSpaceList from '@hooks/space/useGetSpaceList';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '@components/_common/atoms/LoadingSpinner';
import SpaceFilterTab from '@pages/Space/SpaceList/SpaceFilterTab';
import { SpaceListParams } from '@customTypes/space';
import S from './style';

export default function SpaceList() {
  const [filters, setFilters] = useState<SpaceListParams>({
    status: null,
    languageIds: '',
    joinedMe: true,
    keyword: '',
    lastId: 0,
    currentUserCount: 1,
  });
  const { studyId } = useParams<{ studyId: string }>();
  const { spaces, isLoading, hasNextPage, isFetchingNextPage, nextList } = useGetSpaceList(studyId, filters);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          nextList().catch((e) => {
            console.error('스크롤 에러', e);
          });
        }
      },
      { threshold: 0.1 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, nextList]);

  return (
    <S.BodyContainer>
      <SpaceFilterTab
        spaceFilter={filters}
        setSpaceFilter={setFilters}
      />
      <S.SpaceListContainer>
        {spaces &&
          !isLoading &&
          spaces.map((space) => (
            <SpaceCard
              key={space.id}
              id={space.id}
              joinedMe={space.joinedMe}
              name={space.name}
              language={space.language}
              totalUserCount={space.totalUserCount}
              createdAt={space.createdAt}
              status={space.status}
              leader={space.leader}
              currentUsers={space.currentUsers}
            />
          ))}
        {hasNextPage && (
          <div
            ref={observerRef}
            style={{
              height: '0.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: '4rem',
            }}
          >
            <LoadingSpinner />
          </div>
        )}
      </S.SpaceListContainer>
    </S.BodyContainer>
  );
}
