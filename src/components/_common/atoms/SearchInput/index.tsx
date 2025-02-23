import { BsSearch } from 'react-icons/bs';
import Icon from '../Icon';
import S from './style';

interface SearchInputProps {
  placeholder?: string;
}

export default function SearchInput({ placeholder = '' }: SearchInputProps) {
  return (
    <S.Container>
      <S.SearchIcon>
        <Icon
          size='md'
          color='700'
        >
          <BsSearch />
        </Icon>
      </S.SearchIcon>
      <S.Input placeholder={placeholder} />
    </S.Container>
  );
}
