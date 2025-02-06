import { PropsWithChildren } from 'react';
import S, { TagStyleProps } from './style';

export type TagProps = PropsWithChildren<React.ComponentProps<'div'> & TagStyleProps>;

export default function Tag({ children, color }: TagProps) {
  return <S.Tag color={color}>{children}</S.Tag>;
}
