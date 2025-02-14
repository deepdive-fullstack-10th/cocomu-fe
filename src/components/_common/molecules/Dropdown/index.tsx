import { useState } from 'react';
import { DropDownItemStyleProps } from '@components/_common/atoms/DropdownItem/style';
import DropdownItem from '@components/_common/atoms/DropdownItem';
import Icon from '@components/_common/atoms/Icon';
import { BsChevronDown } from 'react-icons/bs';
import S from './style';

type DropdownListProps<T extends readonly string[]> = {
  label: string;
  placeholder?: string;
  items: T;
  value?: T[number];
  onSelect: (value: T[number]) => void;
  onChange?: (value: string) => void;
} & DropDownItemStyleProps;

export default function Dropdown<T extends readonly string[]>({
  label,
  placeholder = '',
  items,
  size,
  color,
  value,
  onSelect,
  onChange,
}: DropdownListProps<T> & DropDownItemStyleProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Header>
        <S.InputContainer>
          <S.Input
            placeholder={placeholder}
            value={value || ''}
            onChange={handleInputChange}
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
                onSelect(item);
              }}
            />
          ))}
        </S.DropdownList>
      )}
    </S.Container>
  );
}
