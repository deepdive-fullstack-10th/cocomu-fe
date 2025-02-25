import { useEffect, useState } from 'react';
import { StudyData } from '@customTypes/study';
import { fetchStudies } from '@api/domain/study';

interface UseStudyListProps {
  currentPage: number;
  itemsPerPage: number;
  status?: string;
  languages?: string[];
  judges?: string[];
  joinable?: boolean;
  keyword?: string;
  onTotalItemsChange: (totalItems: number) => void;
}

export default function useStudyList({
  currentPage,
  itemsPerPage,
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
          page: currentPage,
          size: itemsPerPage,
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
  }, [currentPage, itemsPerPage, status, languages, judges, joinable, keyword, onTotalItemsChange]);

  return {
    studies,
  };
}
