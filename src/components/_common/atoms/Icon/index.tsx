import { ReactNode } from 'react';
import S, { IconSize, IconColor } from './style';

interface IconProps {
  size?: IconSize;
  icon: ReactNode;
  color?: IconColor;
}

export default function Icon({ size = 'md', icon, color = '950' }: IconProps) {
  return (
    <S.Icon
      size={size}
      color={color}
    >
      {icon}
    </S.Icon>
  );
}
