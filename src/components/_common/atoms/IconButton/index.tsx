import { PropsWithChildren, ReactNode, useEffect, useState } from 'react';
import Icon from '../Icon';
import S, { IconButtonProps } from './style';

type IconButtonComponentProps = PropsWithChildren<
  React.ComponentProps<'div'> &
    IconButtonProps & {
      icon?: ReactNode;
      onClick?: () => void;
    }
>;

export default function IconButton({
  children,
  color = 'white',
  align = 'left',
  icon,
  shape = 'default',
  onClick,
}: IconButtonComponentProps) {
  const [iconColor, setIconColor] = useState<'50' | '950'>('950');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (color === 'white') {
      if (isHovered) {
        setIconColor('50');
      } else {
        setIconColor('950');
      }
    } else {
      setIconColor('950');
    }
  }, [color, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <S.IconButtonContainer
      color={color}
      align={align}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      shape={shape}
      onClick={onClick}
    >
      {icon && (
        <Icon
          icon={icon}
          color={iconColor}
          size='md'
        />
      )}
      <S.Content>{children}</S.Content>
    </S.IconButtonContainer>
  );
}
