import { useEffect, useState } from 'react';
import { StudyData, FetchStudiesParams } from '@customTypes/study';
import { fetchStudies } from '@api/domain/study';

interface UseStudyListProps extends FetchStudiesParams {
  onTotalItemsChange: (totalItems: number) => void;
}

export default function useStudyList({
  page,
  size,
  status,
  languages,
  judges,
  joinable,
  keyword,
  onTotalItemsChange,
}: UseStudyListProps) {
  const [studies, setStudies] = useState<StudyData[]>([]);

  useEffect(() => {
    const loadStudies = async () => {
      try {
        const { studies: fetchedStudies, totalItems } = await fetchStudies({
          page,
          size,
          status,
          languages,
          judges,
          joinable,
          keyword,
        });
        setStudies(fetchedStudies);
        onTotalItemsChange(totalItems);
      } catch (error) {
        console.error('스터디 데이터를 불러오는데 실패했습니다.', error);
      }
    };

    loadStudies();
  }, [page, size, status, languages, judges, joinable, keyword, onTotalItemsChange]);

  return { studies };
}
