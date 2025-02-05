import { PropsWithChildren } from 'react';
import S, { TagStyleProps } from './style';

export type TagProps = PropsWithChildren<React.ComponentProps<'div'> & TagStyleProps>;

export default function Tag({ children, color = 'white', size = 'md' }: TagProps) {
  return (
    <S.Tag
      color={color}
      size={size}
    >
      {children}
    </S.Tag>
  );
}
