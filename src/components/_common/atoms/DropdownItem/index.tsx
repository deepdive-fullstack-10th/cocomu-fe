import S, { DropDownItemStyleProps } from './style';

type DropdownItemProps = {
  item: string;
  onClick: () => void;
} & DropDownItemStyleProps;

export default function DropdownItem({ item, onClick, size = 'md', color = 'black' }: DropdownItemProps) {
  return (
    <S.DropdownItem
      onClick={onClick}
      color={color}
      size={size}
    >
      {item}
    </S.DropdownItem>
  );
}
