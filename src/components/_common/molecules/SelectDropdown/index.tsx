import { useRef, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

import Icon from '@components/_common/atoms/Icon';
import { FilterData } from '@customTypes/common';

import DropdownList from '../DropdownList';
import S from './style';

interface SelectDropdownProps {
  description?: string;
  items: FilterData[];
  values?: number[];
  isMultiSelect?: boolean;
  onSelect: (id: number[]) => void;
}

const DEFAULT_OPTION: FilterData = { id: 0, name: '전체', imageUrl: '' };

export default function SelectDropdown({
  description = '',
  items,
  values = [],
  isMultiSelect = false,
  onSelect,
}: SelectDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedNames =
    values
      .map((id) => items.find((item) => item.id === id)?.name)
      .filter(Boolean)
      .join(', ') || description;

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!containerRef.current?.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  const handleSelectItem = (id: number) => {
    setIsOpen(false);

    if (id === DEFAULT_OPTION.id) {
      onSelect([]);
      return;
    }

    if (!isMultiSelect) {
      onSelect(values.includes(id) ? [] : [id]);
      return;
    }

    if (values.includes(id)) {
      onSelect(values.filter((selectId) => selectId !== id));
      return;
    }

    onSelect([...values, id]);
  };

  return (
    <S.Container
      ref={containerRef}
      onBlur={handleBlur}
      tabIndex={-1}
    >
      <S.Header
        isOpen={isOpen}
        onClick={toggleDropdown}
      >
        <S.SelectedText>{selectedNames}</S.SelectedText>
        <Icon
          size='sm'
          color='950'
        >
          <BsChevronDown />
        </Icon>
      </S.Header>

      {isOpen && (
        <DropdownList
          items={[DEFAULT_OPTION, ...items]}
          values={values}
          size='lg'
          color='black'
          shape='round'
          onItemSelect={handleSelectItem}
        />
      )}
    </S.Container>
  );
}
