import { useState } from 'react';
import SelectDropdown from '@components/_common/molecules/SelectDropdown';
import ToggleButton from '@components/_common/atoms/ToggleButton';
import SearchInput from '@components/_common/atoms/SearchInput';
import { ACCESS_STATUS, PROGRAMMING_LANGUAGES, JUDGES } from '@constants/constants';
import * as S from './style';

interface FilterTabProps {
  onStatusChange: (status: string | undefined) => void;
  onLanguagesChange: (languages: string[]) => void;
  onJudgesChange: (judges: string[]) => void;
  onJoinableChange: (joinable: boolean) => void;
  onKeywordChange: (keyword: string) => void;
}

export default function FilterTab({
  onStatusChange,
  onLanguagesChange,
  onJudgesChange,
  onJoinableChange,
  onKeywordChange,
}: FilterTabProps) {
  const [selectedAccessStatus, setSelectedAccessStatus] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedJudges, setSelectedJudges] = useState<string[]>([]);
  const [joinable, setJoinable] = useState(false);
  const [keyword, setKeyword] = useState('');

  const handleStatusChange = (values: string[]) => {
    setSelectedAccessStatus(values);
    const status =
      values.length === 0 || values[0] === '전체' ? undefined : values[0] === '공개' ? 'PUBLIC' : 'PRIVATE';
    onStatusChange(status);
  };

  const fetchStudyList = () => {
    onKeywordChange(keyword);
  };

  return (
    <S.FilterTabContainer>
      <S.DropdownWrapper>
        <SelectDropdown
          items={[...ACCESS_STATUS]}
          description='전체'
          values={selectedAccessStatus}
          onSelect={handleStatusChange}
        />
        <SelectDropdown
          items={[...PROGRAMMING_LANGUAGES]}
          description='사용 언어'
          values={selectedLanguages}
          onSelect={(values) => {
            setSelectedLanguages(values);
            onLanguagesChange(values);
          }}
        />
        <SelectDropdown
          items={[...JUDGES]}
          description='사용 플랫폼'
          values={selectedJudges}
          onSelect={(values) => {
            setSelectedJudges(values);
            onJudgesChange(values);
          }}
        />
        <ToggleButton
          size='md'
          shape='round'
          isActive={joinable}
          onToggle={(newJoinable) => {
            setJoinable(newJoinable);
            onJoinableChange(newJoinable);
          }}
        >
          참여 가능한 스터디 보기
        </ToggleButton>
      </S.DropdownWrapper>
      <SearchInput
        placeholder='제목을 검색해주세요'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onSearch={fetchStudyList}
      />
    </S.FilterTabContainer>
  );
}
