import SpaceCard from '@components/Space/SpaceCard';
import { useState } from 'react';
import useGetSpaceList from '@hooks/space/useGetSpaceList';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '@components/_common/atoms/LoadingSpinner';
import SpaceFilterTab from '@pages/Space/SpaceList/SpaceFilterTab';
import { SpaceListParams } from '@customTypes/space';
import useScroll from '@hooks/utils/useScroll';
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
  const { spaces, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } = useGetSpaceList(studyId, filters);
  const { observerRef } = useScroll({
    nextPage: hasNextPage,
    fetchingNextPage: isFetchingNextPage,
    fetchNext: fetchNextPage,
  });

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
