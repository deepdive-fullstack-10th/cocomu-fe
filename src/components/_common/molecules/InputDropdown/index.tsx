import { useState, useRef } from 'react';
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
  error?: string;
  isMultiSelect?: boolean;
  onSelect: (value: string[]) => void;
  onBlur: () => void;
}

export default function InputDropdown<T extends readonly string[]>({
  label = '',
  description = '',
  items,
  values = [],
  error,
  isMultiSelect = false,
  onSelect,
  onBlur,
}: InputDropdownProps<T>) {
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

  const handleAddItem = (newItem: string) => {
    setIsOpen(false);
    setSearch('');

    if (!isMultiSelect) {
      onSelect([newItem]);
      return;
    }

    onSelect([...values, newItem]);
  };

  const handleRemoveTag = (item: string) => {
    onSelect(values.filter((tag) => tag !== item));
  };

  const availableItems = items.filter(
    (item) => !values.includes(item) && item.toLowerCase().includes(search.toLowerCase()),
  );

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
          {isMultiSelect && values.length > 0 && (
            <TagList
              items={values}
              color='primary'
              onRemove={handleRemoveTag}
            />
          )}
          <S.Input
            type='text'
            placeholder={values.length > 0 ? '' : description}
            value={isMultiSelect ? search : (values[0] ?? '')}
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
