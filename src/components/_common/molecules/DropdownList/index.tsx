import DropdownItem from '@components/_common/atoms/DropdownItem';
import { DropDownItemStyleProps } from '@components/_common/atoms/DropdownItem/style';
import S, { DropdownListStyleProps } from './style';

interface DropdownListProps extends DropDownItemStyleProps, DropdownListStyleProps {
  items: string[];
  onItemSelect: (item: string) => void;
}

export default function DropdownList({ items, size, color, shape = 'default', onItemSelect }: DropdownListProps) {
  return (
    <S.DropdownList shape={shape}>
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
