import { useMemo, useState } from 'react';
import { DropDownItemStyleProps } from '@components/_common/atoms/DropdownItem/style';
import DropdownItem from '@components/_common/atoms/DropdownItem';
import Icon from '@components/_common/atoms/Icon';
import { BsChevronDown } from 'react-icons/bs';
import S from './style';

type DropdownListProps<T extends readonly string[]> = {
  label: string;
  placeholder?: string;
  items: T;
  value?: string;
  onSelect: (value: string) => void;
  allowCustomValue?: boolean;
} & DropDownItemStyleProps;

export default function Dropdown<T extends readonly string[]>({
  label,
  placeholder = '',
  items,
  size,
  color,
  value,
  onSelect,
  allowCustomValue = false,
}: DropdownListProps<T> & DropDownItemStyleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const filteredItems = useMemo(() => {
    if (!inputValue) return items;
    return items.filter((item) => item.toLowerCase().includes(inputValue.toLowerCase()));
  }, [items, inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (allowCustomValue) {
      onSelect(newValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && allowCustomValue) {
      setIsOpen(false);
    }
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Header>
        <S.InputContainer>
          <S.Input
            placeholder={placeholder}
            value={value || inputValue || ''}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <S.Icon onClick={toggleDropDown}>
            <Icon
              icon={<BsChevronDown />}
              color='950'
            />
          </S.Icon>
        </S.InputContainer>
      </S.Header>

      {isOpen && (
        <S.DropdownList>
          {items.map((item) => (
            <DropdownItem
              key={item}
              item={item}
              size={size}
              color={color}
              onClick={() => {
                setIsOpen(false);
                setInputValue(item);
                onSelect(item);
              }}
            />
          ))}
        </S.DropdownList>
      )}
    </S.Container>
  );
}
