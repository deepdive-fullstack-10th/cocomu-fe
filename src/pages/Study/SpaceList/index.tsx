import IconButton from '@components/_common/atoms/IconButton';
import { BsPlusLg } from 'react-icons/bs';
import TabMenu from '@components/_common/molecules/TabMenu';
import { PROGRAMMING_LANGUAGES, STEP_LABELS, STUDY_LIST } from '@constants/constants';
import SpaceCard from '@components/SpaceCard';
import { useEffect, useRef, useState } from 'react';
import SelectDropdown from '@components/_common/molecules/SelectDropdown';
import SearchInput from '@components/_common/atoms/SearchInput';
import useSpaceList from '@hooks/useSpaceList';
import { useParams } from 'react-router-dom';
import S from './style';

function Header({ studyTitle }: { studyTitle: string }) {
  const [selectedTab, setSelectedTab] = useState<string>(STUDY_LIST[0]);

  const onCreateSpace = () => {};

  return (
    <div>
      <S.HeaderContainer>
        <S.StudyTitle>{studyTitle}</S.StudyTitle>
        <S.CreateButtonContainer>
          <IconButton
            color='white'
            align='center'
            content='스페이스 생성하기'
            shape='round'
            onClick={onCreateSpace}
          >
            <BsPlusLg />
          </IconButton>
        </S.CreateButtonContainer>
        <S.TabMenuContainer>
          <TabMenu
            tabs={STUDY_LIST}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
          />
        </S.TabMenuContainer>
      </S.HeaderContainer>
    </div>
  );
}

export default function SpaceList() {
  const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const { studyId } = useParams<{ studyId: string }>();
  const { spaces, filters, updateFilters, nextList, hasNextPage, isFetchingNextPage } = useSpaceList(studyId);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          nextList().catch((e) => {
            console.error('무한 스크롤 에러: ', e);
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

  const handleLanguage = (language: string[]) => {
    setSelectedLanguage(language);
    updateFilters({ languages: language.length > 0 ? language : null });
    console.log(language);
  };

  const handleStatus = (status: string[]) => {
    setSelectedStatus(status);
    updateFilters({ status: status.length > 0 ? status : null });
  };

  const handleMySpace = () => {
    updateFilters({ joinedSpace: true });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchKeyword(value);
    updateFilters({ keyword: value || null });
  };

  return (
    <div>
      <Header studyTitle='딥다이버즈 스터디임' />
      <div>
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
              <IconButton
                color='white'
                align='center'
                content='내가 참여한 스페이스 보기'
                shape='round'
                onClick={handleMySpace}
              />
            </S.ClickFilteredContainer>
            <S.SearchFilteredContainer>
              <SearchInput
                placeholder='제목을 검색해 주세요'
                value={searchKeyword}
                onChange={handleSearch}
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
                style={{ height: '20px' }}
              />
            )}
          </S.SpaceListContainer>
        </S.BodyContainer>
      </div>
    </div>
  );
}
