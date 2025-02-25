import { BsChevronDown } from 'react-icons/bs';
import { useState } from 'react';
import Icon from '@components/_common/atoms/Icon';
import S from './style';
import DropdownList from '../DropdownList';

interface SelectDropdownProps<T extends readonly string[]> {
  description?: string;
  items: T;
  values?: string[];
  isMultiSelect?: boolean;
  onSelect: (value: string[]) => void;
}

export default function SelectDropdown<T extends readonly string[]>({
  description = '',
  items,
  values = [],
  isMultiSelect = false,
  onSelect,
}: SelectDropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleAddItem = (newItem: string) => {
    setIsOpen(false);

    if (newItem === '전체') {
      onSelect([]);
      return;
    }

    if (!isMultiSelect) {
      onSelect([newItem]);
      return;
    }

    if (values.includes(newItem)) {
      return;
    }

    onSelect([...values, newItem]);
  };

  return (
    <S.Container>
      <S.Header
        isOpen={isOpen}
        onClick={toggleDropdown}
      >
        <S.SelectedText>{values.length > 0 ? values.join(', ') : description}</S.SelectedText>
        <Icon
          size='sm'
          color='950'
        >
          <BsChevronDown />
        </Icon>
      </S.Header>

      {isOpen && (
        <DropdownList
          items={['전체', ...items]}
          size='lg'
          color='black'
          shape='round'
          onItemSelect={handleAddItem}
        />
      )}
    </S.Container>
  );
}
