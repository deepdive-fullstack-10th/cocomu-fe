import IconButton from '@components/_common/atoms/IconButton';
import { BsPlusLg } from 'react-icons/bs';
import TabMenu from '@components/_common/molecules/TabMenu';
import { PROGRAMMING_LANGUAGES, STEP_LABELS, STUDY_LIST } from '@constants/constants';
import SpaceCard from '@components/Space/SpaceCard';
import { useEffect, useRef, useState } from 'react';
import SelectDropdown from '@components/_common/molecules/SelectDropdown';
import SearchInput from '@components/_common/atoms/SearchInput';
import useSpaceList from '@hooks/useSpaceList';
import { useParams } from 'react-router-dom';
import ToggleButton from '@components/_common/atoms/ToggleButton';
import { SpaceStatusData } from '@customTypes/space';
import LoadingSpinner from '@components/_common/atoms/LoadingSpinner';
import useDebounce from '@hooks/useDebounce';
import S from './style';

export default function SpaceList() {
  const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [joinable, setJoinable] = useState(false);

  const { studyId } = useParams<{ studyId: string }>();
  const { spaces, updateFilters, hasNextPage, isFetchingNextPage, nextList } = useSpaceList(studyId);
  const observerRef = useRef<HTMLDivElement>(null);
  const debouncedValue = useDebounce(searchKeyword, 300);

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

  useEffect(() => {
    updateFilters({ keyword: debouncedValue || null });
  }, [debouncedValue, updateFilters]);

  const handleLanguage = (language: string[]) => {
    setSelectedLanguage(language);
    updateFilters({ language: language.length > 0 ? String(language) : null });
    console.log(spaces);
  };

  const handleStatus = (status: SpaceStatusData[]) => {
    setSelectedStatus(status);
    updateFilters({ status: status.length > 0 ? status : null });
  };

  const handleMySpace = (joined: boolean) => {
    setJoinable(joined);
    updateFilters({ joinedSpace: joined });
  };

  const handleSearch = () => {
    setSearchKeyword(searchKeyword);
  };

  return (
    <S.BodyContainer>
      <S.FilteredContainer>
        <S.ClickFilteredContainer>
          <SelectDropdown
            description='전체'
            items={STEP_LABELS}
            values={selectedStatus}
            onSelect={handleStatus}
          />
          <SelectDropdown
            description='사용 언어'
            items={PROGRAMMING_LANGUAGES}
            values={selectedLanguage}
            onSelect={handleLanguage}
          />
          <ToggleButton
            size='md'
            shape='round'
            isActive={joinable}
            onToggle={(join: boolean) => handleMySpace(join)}
          >
            내가 참여한 스페이스 보기
          </ToggleButton>
        </S.ClickFilteredContainer>
        <S.SearchFilteredContainer>
          <SearchInput
            placeholder='제목을 검색해 주세요'
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            onSearch={handleSearch}
          />
        </S.SearchFilteredContainer>
      </S.FilteredContainer>
      <S.SpaceListContainer>
        {spaces &&
          spaces.map((space) => (
            <SpaceCard
              key={space.id}
              id={space.id}
              joinedSpace={space.joinedSpace}
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
