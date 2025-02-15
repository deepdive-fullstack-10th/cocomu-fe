import { BsChevronDown } from 'react-icons/bs';
import { useState } from 'react';
import DropdownItem from '@components/_common/atoms/DropdownItem';
import { STEP_INFO } from '@constants/constants';
import { DropDownItemStyleProps } from '@components/_common/atoms/DropdownItem/style';
import Icon from '@components/_common/atoms/Icon';
import S from './style';

type StepLabel = (typeof STEP_INFO)[keyof typeof STEP_INFO]['label'];

type Dropdown2Props = {
  items: StepLabel[];
} & DropDownItemStyleProps;

export default function SelectDropdown({ items, color, size }: Dropdown2Props & DropDownItemStyleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<StepLabel>(items[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: StepLabel) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <S.Dropdown2Container>
      <S.Dropdown2Header onClick={() => toggleDropdown()}>
        <S.DropdownText>{selectedItem}</S.DropdownText>
        <S.IconContainer>
          <Icon
            icon={<BsChevronDown size={10} />}
            color='950'
          />
        </S.IconContainer>
      </S.Dropdown2Header>
      <S.DropdownItemContainer isOpen={isOpen}>
        {isOpen &&
          items.map((item) => (
            <DropdownItem
              key={item}
              item={item}
              onClick={() => handleSelect(item)}
              color={color}
              size={size}
            />
          ))}
      </S.DropdownItemContainer>
    </S.Dropdown2Container>
  );
}
