import { PropsWithChildren } from 'react';
import S from './style';

export type StepperProps = PropsWithChildren<
  React.ComponentProps<'div'> & {
    select?: boolean;
    onClick?: () => void;
  }
>;

export default function Stepper({ children, select, onClick }: StepperProps) {
  return (
    <S.Stepper
      select={select}
      onClick={onClick}
    >
      {children}
    </S.Stepper>
  );
}
