import { PropsWithChildren } from 'react';
import S, { dropDownStyleProps } from './style';

export type DropdownItemProps = PropsWithChildren<React.ComponentProps<'div'> & dropDownStyleProps>;

export default function DropdownItem({
  children,
  onClick,
  size = 'lg',
  color = 'black',
}: DropdownItemProps) {
  return (
    <S.DropdownItem
      onClick={onClick}
      color={color}
      size={size}
    >
      {children}
    </S.DropdownItem>
  );
}
