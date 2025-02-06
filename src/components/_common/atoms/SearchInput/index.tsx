import { BiSearchAlt } from 'react-icons/bi';
import S from './style';

type SizeType = 'md' | 'lg';

interface SearchInputProps {
  placeholder: string;
  size: SizeType;
}

export default function SearchInput({ placeholder, size }: SearchInputProps) {
  return (
    <S.SearchContainer size={size}>
      <S.Icon>
        <BiSearchAlt size={20} />
      </S.Icon>
      <S.SearchInput placeholder={placeholder} />
    </S.SearchContainer>
  );
}
