import SpaceCard from '@components/Space/SpaceCard';
import { useState } from 'react';
import useGetSpaceList from '@hooks/space/useGetSpaceList';
import { useParams } from 'react-router-dom';
import SpaceFilterTab from '@pages/Space/SpaceList/SpaceFilterTab';
import { ACCESS_STATUS_MAP_ID } from '@constants/common';
import { SpaceData } from '@customTypes/space';
import Loading from '@pages/Loading';
import S from './style';

export default function SpaceList() {
  const [filters, setFilters] = useState({
    status: [],
    languageIds: [],
    joinable: undefined,
    keyword: '',
    lastId: 10,
  });
  const [keyword, setKeyword] = useState('');

  const { studyId } = useParams<{ studyId: string }>();

  const getTransformedFilters = () => ({
    status: filters.status.length > 0 ? ACCESS_STATUS_MAP_ID[filters.status[0]] : undefined,
    languages: filters.languageIds.length > 0 ? filters.languageIds.join(',') : undefined,
    joinable: filters.joinable,
    keyword: filters.keyword.trim() || undefined,
    lastId: filters.lastId,
  });

  const { data, isLoading } = useGetSpaceList(studyId, getTransformedFilters());

  return (
    <S.BodyContainer>
      <SpaceFilterTab
        studyId={studyId}
        filters={filters}
        keyword={keyword}
        setFilters={setFilters}
        setKeyword={setKeyword}
      />
      <S.SpaceListContainer>
        {isLoading ? (
          <Loading />
        ) : (
          data.codingSpaces.map((space: SpaceData) => (
            <SpaceCard
              key={space.id}
              {...space}
            />
          ))
        )}
      </S.SpaceListContainer>
    </S.BodyContainer>
  );
}
