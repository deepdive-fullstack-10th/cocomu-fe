import React, { useState } from 'react';
import S, { ToggleButtonStyleProps } from './style';

interface ToggleButtonProps extends ToggleButtonStyleProps {
  initialActive?: boolean;
  onToggle?: (isActive: boolean) => void;
  children: React.ReactNode;
}

export default function ToggleButton({
  initialActive = false,
  size = 'md',
  shape = 'default',
  onToggle,
  children,
}: ToggleButtonProps) {
  const [isActive, setIsActive] = useState(initialActive);

  const handleClick = () => {
    const newActiveState = !isActive;
    setIsActive(newActiveState);
    onToggle?.(newActiveState);
  };

  return (
    <S.ToggleButton
      onClick={handleClick}
      size={size}
      shape={shape}
      isActive={isActive}
    >
      {children}
    </S.ToggleButton>
  );
}
