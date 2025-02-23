import { useState } from 'react';
import Icon from '@components/_common/atoms/Icon';
import { BsChevronDown } from 'react-icons/bs';
import TagList from '../TagList';
import DropdownList from '../DropdownList';
import S from './style';

interface InputDropdownProps<T extends readonly string[]> {
  label?: string;
  items: T;
  values?: string[];
  onSelect: (value: string[]) => void;
}

export default function InputDropdown<T extends readonly string[]>({
  label = '',
  items,
  values = [],
  onSelect,
}: InputDropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => setIsOpen((prev) => !prev);

  const handleAddItem = (newItem: string) => {
    onSelect([...values, newItem]);
    setIsOpen(false);
  };

  const handleRemoveTag = (item: string) => {
    onSelect(values.filter((tag) => tag !== item));
  };

  const availableItems = items.filter((item) => !values.includes(item));

  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      <S.InputContainer onClick={toggleDropDown}>
        <TagList
          items={values}
          color='primary'
          onRemove={handleRemoveTag}
        />
        <Icon
          size='sm'
          color='950'
        >
          <BsChevronDown />
        </Icon>
      </S.InputContainer>

      {isOpen && (
        <DropdownList
          items={availableItems}
          size='md'
          color='black'
          onItemSelect={handleAddItem}
        />
      )}
    </S.Container>
  );
}
