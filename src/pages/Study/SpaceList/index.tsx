import NavBar from '@components/NavBar';
import IconButton from '@components/_common/atoms/IconButton';
import { BsPlusLg } from 'react-icons/bs';
import TabMenu from '@components/_common/molecules/TabMenu';
import { NAVBAR_DROPDOWN_LABELS, PROGRAMMING_LANGUAGES, STEP_LABELS, STUDY_LIST } from '@constants/constants';
import SpaceCard from '@components/SpaceCard';
import { useState } from 'react';
import SelectDropdown from '@components/_common/molecules/SelectDropdown';
import SearchInput from '@components/_common/atoms/SearchInput';
import { SpaceData } from '@customTypes/space';
import S from './style';

function Header({ studyTitle }: { studyTitle: string }) {
  const isLogin = false;
  const [selectedTab, setSelectedTab] = useState<string>(STUDY_LIST[0]);

  const onCreateSpace = () => {};

  return (
    <div>
      <NavBar
        items={NAVBAR_DROPDOWN_LABELS}
        isLogined={!isLogin}
      />
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

function Body() {
  const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const spaces: SpaceData[] = generateSpaceData(100);

  const handleLanguage = (language: string[]) => {
    setSelectedLanguage(language);
    /* todo 사용 언어 필터링 */
  };

  const handleStatus = (status: string[]) => {
    setSelectedStatus(status);
    /* todo 코딩 스페이스 상태 필터링 */
  };

  const handleMySpace = () => {
    console.log('내가 참여한 스페이스');
    /* todo 내가 참여한 스페이스 필터링 */
  };

  return (
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
            <SearchInput placeholder='제목을 검색해 주세요' />
          </S.SearchFilteredContainer>
        </S.FilteredContainer>
        <S.SpaceListContainer>
          {spaces.map((space) => (
            <SpaceCard
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
        </S.SpaceListContainer>
      </S.BodyContainer>
    </div>
  );
}

export default function SpaceList() {
  return (
    <div>
      <Header studyTitle='딥다이버즈 스터디임' />
      <Body />
    </div>
  );
}
