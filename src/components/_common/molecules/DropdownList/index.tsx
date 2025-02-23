import DropdownItem from '@components/_common/atoms/DropdownItem';
import { DropDownItemStyleProps } from '@components/_common/atoms/DropdownItem/style';
import S from './style';

interface DropdownListProps extends DropDownItemStyleProps {
  items: string[];
  onItemSelect: (item: string) => void;
}

export default function DropdownList({ items, size, color, onItemSelect }: DropdownListProps) {
  return (
    <S.DropdownList>
      {items.map((item) => (
        <DropdownItem
          key={item}
          item={item}
          size={size}
          color={color}
          onClick={() => onItemSelect(item)}
        />
      ))}
    </S.DropdownList>
  );
}
