import { PropsWithChildren } from 'react';
import L, { dropDownStyleProps } from './style';

export type DropdownItemProps = PropsWithChildren<React.ComponentProps<'div'> & dropDownStyleProps>;

export default function DropdownItem({
  children,
  onClick,
  size = 'lg',
  color = 'black',
}: DropdownItemProps) {
  return (
    <L.DropdownItem
      onClick={onClick}
      color={color}
      size={size}
    >
      {children}
    </L.DropdownItem>
  );
}
