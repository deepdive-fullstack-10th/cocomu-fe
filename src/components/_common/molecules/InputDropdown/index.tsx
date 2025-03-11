import { useState, useRef } from 'react';
import Icon from '@components/_common/atoms/Icon';
import { BsChevronDown } from 'react-icons/bs';
import { FilterData } from '@customTypes/common';
import TagList from '../TagList';
import DropdownList from '../DropdownList';
import S from './style';

interface InputDropdownProps {
  label?: string;
  description?: string;
  items: FilterData[];
  values?: number[];
  error?: string;
  isMultiSelect?: boolean;
  onSelect: (value: number[]) => void;
  onBlur: () => void;
}

export default function InputDropdown({
  label = '',
  description = '',
  items,
  values = [],
  error,
  isMultiSelect = false,
  onSelect,
  onBlur,
}: InputDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleDropDown = () => setIsOpen((prev) => !prev);

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!containerRef.current?.contains(event.relatedTarget)) {
      setIsOpen(false);
      onBlur();
    }
  };

  const handleAddItem = (id: number) => {
    setIsOpen(false);
    setSearch('');

    if (!isMultiSelect) {
      onSelect([id]);
      return;
    }

    if (!values.includes(id)) {
      onSelect([...values, id]);
    }
  };

  const handleRemoveTag = (id: number) => {
    onSelect(values.filter((selectId) => selectId !== id));
  };

  const availableItems = items.filter(
    (item) => !values.includes(item.id) && item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const selectedItems = items.filter((item) => values.includes(item.id));

  return (
    <S.Container>
      <S.DropdownContainer
        ref={containerRef}
        onBlur={handleBlur}
        tabIndex={-1}
      >
        {label && <S.Label>{label}</S.Label>}

        <S.InputContainer
          isOpen={isOpen}
          isError={!!error}
          onClick={toggleDropDown}
        >
          {isMultiSelect && selectedItems.length > 0 && (
            <TagList
              items={selectedItems}
              color='primary'
              onRemove={handleRemoveTag}
            />
          )}
          <S.Input
            type='text'
            placeholder={selectedItems.length > 0 ? '' : description}
            value={isMultiSelect ? search : (selectedItems[0]?.name ?? '')}
            onChange={(e) => isMultiSelect && setSearch(e.target.value)}
            disabled={!isMultiSelect}
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
            values={values}
            size='md'
            color='black'
            onItemSelect={handleAddItem}
          />
        )}
      </S.DropdownContainer>

      {error && <S.ErrorText role='alert'>{error}</S.ErrorText>}
    </S.Container>
  );
}
