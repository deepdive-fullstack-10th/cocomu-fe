import { useState } from 'react';
import SelectDropdown from '@components/_common/molecules/SelectDropdown';
import ToggleButton from '@components/_common/atoms/ToggleButton';
import SearchInput from '@components/_common/atoms/SearchInput';
import { ACCESS_STATUS_MAP, PROGRAMMING_LANGUAGES, JUDGES } from '@constants/constants';
import * as S from './style';

interface HeaderProps {
  onStatusChange: (status: string | undefined) => void;
  onLanguagesChange: (languages: string[]) => void;
  onJudgesChange: (judges: string[]) => void;
  onJoinableChange: (joinable: boolean) => void;
  onKeywordChange: (keyword: string) => void;
}

export default function Header({
  onStatusChange,
  onLanguagesChange,
  onJudgesChange,
  onJoinableChange,
  onKeywordChange,
}: HeaderProps) {
  const [selectedAccessStatus, setSelectedAccessStatus] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedJudges, setSelectedJudges] = useState<string[]>([]);
  const [joinable, setJoinable] = useState(false);
  const [keyword, setKeyword] = useState('');

  const handleStatusChange = (values: string[]) => {
    setSelectedAccessStatus(values);
    const status = Object.entries(ACCESS_STATUS_MAP).find(([, label]) => label === values[0])?.[0];
    onStatusChange(status || undefined);
    console.log('선택된 Status:', status || undefined);
  };

  return (
    <S.HeaderContainer>
      <S.DropdownWrapper>
        <SelectDropdown
          items={Object.values(ACCESS_STATUS_MAP)}
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
      <S.SearchWrapper>
        <SearchInput
          placeholder='제목을 검색해주세요'
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            onKeywordChange(e.target.value);
          }}
        />
      </S.SearchWrapper>
    </S.HeaderContainer>
  );
}
