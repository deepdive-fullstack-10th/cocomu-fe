import { PropsWithChildren } from 'react';
import S, { TagStyleProps } from './style';

export type TagProps = PropsWithChildren<React.ComponentProps<'div'> & TagStyleProps>;

export default function Tag({ children, color = 'gray' }: TagProps) {
  return <S.Tag color={color}>{children}</S.Tag>;
}
