import { BsSearch } from 'react-icons/bs';
import Icon from '../Icon';
import S from './style';

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ placeholder = '', value, onChange }: SearchInputProps) {
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
      <S.Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </S.Container>
  );
}
