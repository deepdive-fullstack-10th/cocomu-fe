import { useState } from 'react';
import DropdownList from '@components/_common/molecules/DropdownList';
import { PROGRAMMING_LANGUAGES } from '@constants/constants';

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  return (
    <div
      style={{
        width: '15%',
      }}
    >
      <DropdownList
        label='스페이스 사용 언어'
        placeholder='사용 언어'
        items={PROGRAMMING_LANGUAGES}
        size='lg'
        color='gray'
        onSelect={(value) => setSelectedLanguage(value)}
      />
      {selectedLanguage && (
        <p>
          선택된 언어:
          {selectedLanguage}
        </p>
      )}
    </div>
  );
}
