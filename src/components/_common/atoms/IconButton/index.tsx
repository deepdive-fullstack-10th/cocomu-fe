import { PropsWithChildren, ReactNode } from 'react';
import S, { IconButtonProps } from './style';

export type IconButtonComponentProps = PropsWithChildren<
  React.ComponentProps<'div'> &
    IconButtonProps & {
      icon?: ReactNode;
    }
>;

export default function IconButtton({ children, color, align, icon }: IconButtonComponentProps) {
  return (
    <S.IconButtonContainer
      color={color}
      align={align}
    >
      {icon && <S.Icon>{icon}</S.Icon>}
      <S.Content>{children}</S.Content>
    </S.IconButtonContainer>
  );
}
