import { PropsWithChildren, ReactNode, useEffect, useState } from 'react';
import Icon from '../Icon';
import S, { IconButtonProps } from './style';

type IconButtonComponentProps = PropsWithChildren<
  React.ComponentProps<'div'> &
    IconButtonProps & {
      icon?: ReactNode;
    }
>;

export default function IconButtton({ children, color = 'white', align = 'left', icon }: IconButtonComponentProps) {
  const [iconColor, setIconcolor] = useState<'50' | '950'>('950');
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    if (color === 'white') {
      if (isHovered) {
        setIconcolor('50');
      } else {
        setIconcolor('950');
      }
    } else {
      setIconcolor('950');
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
