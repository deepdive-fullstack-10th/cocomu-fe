import UserCard from '@components/UserCard';
import useGetMemberList from '@hooks/study/useGetMemberList';
import { useParams } from 'react-router-dom';
import { UserDetailData } from '@customTypes/user';
import LoadingSpinner from '@components/_common/atoms/LoadingSpinner';
import useScroll from '@hooks/utils/useScroll';
import S from './style';

export default function MemberList() {
  const { studyId } = useParams<{ studyId: string }>();
  const { userList, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGetMemberList(studyId);
  const { observerRef, isFetching } = useScroll({
    nextPage: hasNextPage,
    fetchingNextPage: isFetchingNextPage,
    fetchNext: fetchNextPage,
    delayTime: 1000,
  });

  return (
    <S.UserCardContainer>
      {userList.map((user: UserDetailData) => (
        <UserCard
          key={user.id}
          id={user.id}
          successCount={user.successCount}
          failedCount={user.failedCount}
          joinedDate={user.joinedDate}
          nickname={user.nickname}
          profileImageUrl={user.profileImageUrl}
        />
      ))}
      {(hasNextPage || isLoading || isFetching) && (
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
