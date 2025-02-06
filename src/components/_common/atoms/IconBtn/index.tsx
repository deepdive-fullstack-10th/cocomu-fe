import { PropsWithChildren, ReactNode } from 'react';
import S, { IconBtnProps } from './style';

export type IconBtnComponentProps = PropsWithChildren<
  React.ComponentProps<'div'> &
    IconBtnProps & {
      icon?: ReactNode;
    }
>;

export default function IconBtn({ children, color, align, border, icon }: IconBtnComponentProps) {
  return (
    <S.IconBtnContainer
      color={color}
      align={align}
      border={border}
    >
      {icon && <S.Icon>{icon}</S.Icon>}
      <S.Content>{children}</S.Content>
    </S.IconBtnContainer>
  );
}
