import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { StudyData } from '@customTypes/study';
import useGetStudyList from '@hooks/user/useGetJoinedStudyList';
import StudyCard from 'src/components/Study/StudyCard';
import LoadingSpinner from '@components/_common/atoms/LoadingSpinner';
import S from './style';

export default function MyStudy() {
  const observerRef = useRef(null);
  const { userId } = useParams<{ userId: string }>();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetStudyList({
    userId,
  });

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 },
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, observerRef]);

  return (
    <S.Container>
      <S.Body>
        {data?.pages.map(
          (page) =>
            page?.studies?.map((study: StudyData) => (
              <StudyCard
                key={study.id}
                {...study}
              />
            )),
          // eslint-disable-next-line function-paren-newline
        )}
      </S.Body>

      {hasNextPage && (
        <div
          ref={observerRef}
          style={{ height: '10px' }}
        />
      )}

      {isFetchingNextPage && (
        <S.Footer>
          <LoadingSpinner />
        </S.Footer>
      )}
    </S.Container>
  );
}
