import { ReactNode } from 'react';
import S, { IconSize, IconColor } from './style';

interface IconProps {
  size?: IconSize;
  icon: ReactNode;
  color?: IconColor;
  onClick?: () => void;
}

export default function Icon({ size = 'sm', icon, color = '950', onClick }: IconProps) {
  return (
    <S.Icon
      size={size}
      color={color}
      onClick={onClick}
    >
      {icon}
    </S.Icon>
  );
}
