import { useParams } from 'react-router-dom';
import MemberCard from '@components/Space/MemberCard';
import useGetMemberList from '@hooks/study/useGetMemberList';
import useScroll from '@hooks/utils/useScroll';
import LoadingSpinner from '@components/_common/atoms/LoadingSpinner';
import { UserDetailData } from '@customTypes/user';
import S from './style';

export default function MemberList() {
  const { studyId } = useParams<{ studyId: string }>();

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGetMemberList({ studyId });

  const { observerRef } = useScroll({
    nextPage: hasNextPage,
    fetchingNextPage: isFetchingNextPage,
    fetchNext: fetchNextPage,
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <S.Container>
      {data?.pages.flatMap((page) =>
        page.map((user: UserDetailData) => (
          <MemberCard
            key={user.id}
            {...user}
          />
        )),
      )}

      {hasNextPage && <S.Sentinel ref={observerRef}>{isFetchingNextPage && <LoadingSpinner />}</S.Sentinel>}
    </S.Container>
  );
}
