import { PropsWithChildren } from 'react';
import S, { ButtonStyleProps } from './style';

export type ButtonProps = PropsWithChildren<React.ComponentProps<'button'> & ButtonStyleProps>;

export default function Button({
  children,
  onClick,
  type = 'button',
  size = 'md',
  color = 'white',
  shape = 'default',
}: ButtonProps) {
  return (
    <S.Button
      onClick={onClick}
      type={type}
      size={size}
      color={color}
      shape={shape}
    >
      {children}
    </S.Button>
  );
}
