import { useState } from 'react';
import { DropDownItemStyleProps } from '@components/_common/atoms/DropdownItem/style';
import DropdownItem from '@components/_common/atoms/DropdownItem';
import Icon from '@components/_common/atoms/Icon';
import { BsChevronDown } from 'react-icons/bs';
import S from './style';

type DropdownListProps<T extends readonly string[]> = {
  label: string;
  placeholder: string;
  items: T;
  onSelect: (value: T[number]) => void;
  size?: string;
  color?: string;
} & DropDownItemStyleProps;

export default function DropdownList<T extends readonly string[]>({
  label,
  placeholder,
  items,
  size = 'md',
  color = 'black',
  onSelect,
}: DropdownListProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Label>{label}</S.Label>
        <S.InputContainer>
          <S.Input placeholder={placeholder} />
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
              onClick={() => onSelect(item)}
            />
          ))}
        </S.DropdownList>
      )}
    </S.Container>
  );
}
