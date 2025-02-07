import { BsSearch } from 'react-icons/bs';
import S from './style';

type SizeType = 'md' | 'lg';

interface SearchInputProps {
  placeholder?: string;
  size: SizeType;
}

export default function SearchInput({ placeholder = '', size }: SearchInputProps) {
  return (
    <S.SearchContainer size={size}>
      <S.Icon>
        <BsSearch size={15} />
      </S.Icon>
      <S.SearchInput placeholder={placeholder} />
    </S.SearchContainer>
  );
}
