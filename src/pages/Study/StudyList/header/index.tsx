import { useState } from 'react';
import SelectDropdown from '@components/_common/molecules/SelectDropdown';
import ToggleButton from '@components/_common/atoms/ToggleButton';
import SearchInput from '@components/_common/atoms/SearchInput';
import { ACCESS_STATUS, PROGRAMMING_LANGUAGES, JUDGES } from '@constants/constants';
import * as S from './style';

export default function Header() {
  // 선택된 값 상태 관리
  const [selectedAccessStatus, setSelectedAccessStatus] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedJudges, setSelectedJudges] = useState<string[]>([]);

  return (
    <S.HeaderContainer>
      <S.DropdownWrapper>
        <SelectDropdown
          items={[...ACCESS_STATUS]}
          description='전체'
          values={selectedAccessStatus}
          onSelect={setSelectedAccessStatus}
        />
        <SelectDropdown
          items={[...PROGRAMMING_LANGUAGES]}
          description='사용 언어'
          values={selectedLanguages}
          onSelect={setSelectedLanguages}
        />
        <SelectDropdown
          items={[...JUDGES]}
          description='사용 플랫폼'
          values={selectedJudges}
          onSelect={setSelectedJudges}
        />
        <ToggleButton
          size='md'
          shape='round'
          isActive={false}
        >
          참여 가능한 스터디 보기
        </ToggleButton>
      </S.DropdownWrapper>
      <S.SearchWrapper>
        <SearchInput placeholder='제목을 검색해주세요' />
      </S.SearchWrapper>
    </S.HeaderContainer>
  );
}
