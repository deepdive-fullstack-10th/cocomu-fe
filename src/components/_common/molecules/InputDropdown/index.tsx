import { useState } from 'react';
import { DropDownItemStyleProps } from '@components/_common/atoms/DropdownItem/style';
import DropdownItem from '@components/_common/atoms/DropdownItem';
import Icon from '@components/_common/atoms/Icon';
import { BsChevronDown, BsX } from 'react-icons/bs';
import Tag from '@components/_common/atoms/Tag';
import S from './style';

type DropdownListProps<T extends readonly string[]> = {
  label?: string;
  placeholder?: string;
  items: T;
  values?: string[];
  onSelect: (value: string[]) => void;
  allowCustomValue?: boolean;
} & DropDownItemStyleProps;

export default function Dropdown<T extends readonly string[]>({
  label = '',
  placeholder = '',
  items,
  size,
  color,
  values = [],
  onSelect,
  allowCustomValue = false,
}: DropdownListProps<T> & DropDownItemStyleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = (newItem: string) => {
    if (values?.includes(newItem)) {
      setIsOpen(false);
      return;
    }
    setIsOpen(false);
    setInputValue('');
    onSelect([...(values || []), newItem]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ' && allowCustomValue) {
      handleAddItem(inputValue);
    }
  };

  const handleRemoveTag = (item: string) => {
    const newValues = values?.filter((tag) => tag !== item) || [];
    onSelect(newValues);
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Header>
        <S.InputContainer>
          {values?.map((tag) => (
            <Tag
              color='primary'
              key={tag}
            >
              {tag}
              <Icon
                icon={<BsX />}
                color='950'
                onClick={() => handleRemoveTag(tag)}
              />
            </Tag>
          ))}
          <S.Input
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <Icon
            icon={<BsChevronDown />}
            color='950'
            onClick={toggleDropDown}
          />
        </S.InputContainer>
      </S.Header>

      {isOpen && (
        <S.DropdownList>
          {items.map((item: string) => (
            <DropdownItem
              key={item}
              item={item}
              size={size}
              color={color}
              onClick={() => handleAddItem(item)}
            />
          ))}
        </S.DropdownList>
      )}
    </S.Container>
  );
}
