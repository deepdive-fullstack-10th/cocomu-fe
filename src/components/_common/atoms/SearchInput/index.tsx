import { BsSearch } from 'react-icons/bs';
import S from './style';

interface SearchInputProps {
  placeholder?: string;
}

export default function SearchInput({ placeholder = '' }: SearchInputProps) {
  return (
    <S.SearchContainer>
      <S.Icon>
        <BsSearch size={15} />
      </S.Icon>
      <S.SearchInput placeholder={placeholder} />
    </S.SearchContainer>
  );
}
