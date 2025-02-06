import { PropsWithChildren } from 'react';
import S, { StepperStyleProps } from './style';

export type StepperProps = PropsWithChildren<React.ComponentProps<'div'> & StepperStyleProps>;

export default function Stepper({ children, color, size }: StepperProps) {
  return (
    <S.Stepper
      color={color}
      size={size}
    >
      {children}
    </S.Stepper>
  );
}
