import { BsSearch } from 'react-icons/bs';
import Icon from '../Icon';
import S from './style';

interface SearchInputProps {
  placeholder?: string;
}

export default function SearchInput({ placeholder = '' }: SearchInputProps) {
  return (
    <S.SearchContainer>
      <S.Icon>
        <Icon
          size='sm'
          icon={<BsSearch />}
          color='700'
        />
      </S.Icon>
      <S.SearchInput placeholder={placeholder} />
    </S.SearchContainer>
  );
}
