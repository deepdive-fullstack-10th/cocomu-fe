import { ReactNode } from 'react';
import S, { IconSize, IconColor } from './style';

interface IconProps {
  size?: IconSize;
  icon: ReactNode;
  color?: IconColor;
  pointer?: boolean;
  onClick?: () => void;
}

export default function Icon({ size = 'sm', icon, color = '950', pointer = false, onClick }: IconProps) {
  return (
    <S.Icon
      size={size}
      color={color}
      pointer={pointer}
      onClick={onClick}
    >
      {icon}
    </S.Icon>
  );
}
