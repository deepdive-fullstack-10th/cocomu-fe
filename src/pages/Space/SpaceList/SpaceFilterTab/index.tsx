import S from '@pages/Space/SpaceList/style';
import SelectDropdown from '@components/_common/molecules/SelectDropdown';
import { PROGRAMMING_LANGUAGES, STEP_LABELS } from '@constants/constants';
import ToggleButton from '@components/_common/atoms/ToggleButton';
import SearchInput from '@components/_common/atoms/SearchInput';
import { SpaceListParams } from '@customTypes/space';
import useDebounce from '@hooks/utils/useDebounce';
import { useCallback } from 'react';

interface spaceFilterProps {
  spaceFilter: SpaceListParams;
  setSpaceFilter: React.Dispatch<React.SetStateAction<SpaceListParams>>;
}

type spaceFilterKey = keyof SpaceListParams;

export default function SpaceFilterTab({ spaceFilter, setSpaceFilter }: spaceFilterProps) {
  const handleChangeFilter = <K extends spaceFilterKey>(key: K, value: SpaceListParams[K] | string[]) => {
    setSpaceFilter((prev) => ({ ...prev, [key]: value }));
    console.log(value);
  };
  const debouncedKeyword = useDebounce(spaceFilter.keyword, 300);

  const handleSearch = useCallback(() => {
    console.log(debouncedKeyword);
  }, [debouncedKeyword]);

  return (
    <S.FilteredContainer>
      <S.ClickFilteredContainer>
        <SelectDropdown
          description='전체'
          items={[...STEP_LABELS]}
          values={spaceFilter.status ? spaceFilter.status : []}
          onSelect={(values) => handleChangeFilter('status', values)}
        />
        <SelectDropdown
          description='사용 언어'
          items={[...PROGRAMMING_LANGUAGES]}
          values={spaceFilter.languageIds ? [String(spaceFilter.languageIds)] : []}
          onSelect={(values) => handleChangeFilter('languageIds', values)}
        />
        <ToggleButton
          size='md'
          shape='round'
          isActive={spaceFilter.joinedMe}
          onToggle={(values) => handleChangeFilter('joinedMe', values)}
        >
          내가 참여한 스페이스 보기
        </ToggleButton>
      </S.ClickFilteredContainer>
      <S.SearchFilteredContainer>
        <SearchInput
          placeholder='제목을 검색해 주세요'
          value={spaceFilter.keyword}
          onChange={(e) => handleChangeFilter('keyword', e.target.value)}
          onSearch={handleSearch}
        />
      </S.SearchFilteredContainer>
    </S.FilteredContainer>
  );
}
