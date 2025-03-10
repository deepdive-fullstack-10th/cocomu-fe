import UserCard from '@components/UserCard';
import useGetMemberList from '@hooks/study/useGetMemberList';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '@components/_common/atoms/LoadingSpinner';
import useScroll from '@hooks/utils/useScroll';
import S from './style';

export default function MemberList() {
  const { studyId } = useParams<{ studyId: string }>();
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGetMemberList({ studyId });

  const { observerRef, isFetching } = useScroll({
    nextPage: hasNextPage,
    fetchingNextPage: isFetchingNextPage,
    fetchNext: fetchNextPage,
    delayTime: 1000,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <S.UserCardContainer>
      {data?.pages?.flatMap((page) =>
        page.map((user) => (
          <UserCard
            key={`user-${user.id}`}
            id={user.id}
            nickname={user.nickname}
            profileImageUrl={user.profileImageUrl}
            role={user.role}
            joinedDate={user.joinedDate}
          />
        )),
      )}
      {(hasNextPage || isFetching) && (
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
    </S.UserCardContainer>
  );
}
