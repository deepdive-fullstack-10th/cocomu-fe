import React, { useState } from 'react';
import S from './style';

interface ToggleButtonProps {
  initialActive?: boolean;
  size?: 'sm' | 'md' | 'lg';
  shape?: 'default' | 'round';
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
    <S.Button
      onClick={handleClick}
      size={size}
      shape={shape}
      isActive={isActive}
    >
      {children}
    </S.Button>
  );
}
