import { ACCESS_STATUS, PROGRAMMING_LANGUAGES, JUDGES } from '@constants/constants';

import SelectDropdown from '@components/_common/molecules/SelectDropdown';
import ToggleButton from '@components/_common/atoms/ToggleButton';
import SearchInput from '@components/_common/atoms/SearchInput';

import S from './style';

interface Filters {
  status: string | undefined;
  languages: string[];
  workbooks: string[];
  joinable: boolean;
}

interface FilterTabProps {
  filters: Filters;
  keyword: string;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  setKeyword: (keyword: string) => void;
}

export default function FilterTab({ filters, keyword, setFilters, setKeyword }: FilterTabProps) {
  return (
    <S.FilterTabContainer>
      <S.DropdownWrapper>
        <SelectDropdown
          items={[...ACCESS_STATUS]}
          description='전체'
          values={filters.status ? [filters.status] : []}
          onSelect={(values) => {
            const newStatus =
              values.length === 0 || values[0] === '전체' ? undefined : values[0] === '공개' ? 'PUBLIC' : 'PRIVATE';
            setFilters((prev) => ({ ...prev, status: newStatus }));
          }}
        />
        <SelectDropdown
          items={[...PROGRAMMING_LANGUAGES]}
          description='사용 언어'
          values={filters.languages}
          onSelect={(values) => setFilters((prev) => ({ ...prev, languages: values }))}
        />
        <SelectDropdown
          items={[...JUDGES]}
          description='사용 플랫폼'
          values={filters.workbooks}
          onSelect={(values) => setFilters((prev) => ({ ...prev, workbooks: values }))}
        />
        <ToggleButton
          size='md'
          shape='round'
          isActive={filters.joinable}
          onToggle={(value) => setFilters((prev) => ({ ...prev, joinable: value }))}
        >
          참여 가능한 스터디 보기
        </ToggleButton>
      </S.DropdownWrapper>
      <SearchInput
        placeholder='제목을 검색해주세요'
        value={keyword}
        onChange={setKeyword}
        onSearch={() => setFilters((prev) => ({ ...prev, keyword }))}
      />
    </S.FilterTabContainer>
  );
}
