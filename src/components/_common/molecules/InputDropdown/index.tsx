import { useState } from 'react';
import Icon from '@components/_common/atoms/Icon';
import { BsChevronDown } from 'react-icons/bs';
import TagList from '../TagList';
import DropdownList from '../DropdownList';
import S from './style';

interface InputDropdownProps<T extends readonly string[]> {
  label?: string;
  description?: string;
  items: T;
  values?: string[];
  isMultiSelect?: boolean;
  onSelect: (value: string[]) => void;
}

export default function InputDropdown<T extends readonly string[]>({
  label = '',
  description = '',
  items,
  values = [],
  isMultiSelect = false,
  onSelect,
}: InputDropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => setIsOpen((prev) => !prev);

  const handleAddItem = (newItem: string) => {
    setIsOpen(false);

    if (!isMultiSelect) {
      onSelect([newItem]);
      return;
    }

    onSelect([...values, newItem]);
  };

  const handleRemoveTag = (item: string) => {
    onSelect(values.filter((tag) => tag !== item));
  };

  const availableItems = items.filter((item) => !values.includes(item));

  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}

      <S.InputContainer
        isOpen={isOpen}
        onClick={toggleDropDown}
      >
        {isMultiSelect && values.length > 0 ? (
          <TagList
            items={values}
            color='primary'
            onRemove={handleRemoveTag}
          />
        ) : (
          <S.SelectedText>{values[0] || description}</S.SelectedText>
        )}
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
