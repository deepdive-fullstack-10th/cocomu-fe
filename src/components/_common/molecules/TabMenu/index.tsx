import { useState } from 'react';
import S from './style';

type TabMenuProps<T extends readonly string[]> = {
  tabs: T;
  onTabChange?: (index: number) => void;
  defaultMenu?: number;
};

export default function TabMenu<T extends readonly string[]>({ tabs, onTabChange, defaultMenu = 0 }: TabMenuProps<T>) {
  const [menuIndex, setMenuIndex] = useState(defaultMenu);

  const handleClick = (index: number) => {
    setMenuIndex(index);
    onTabChange?.(index);
  };

  return (
    <S.TabMenuContainer>
      {tabs.map((menu, index) => (
        <S.TabElement
          key={menu}
          onClick={() => handleClick(index)}
          $isSelected={menuIndex === index}
        >
          {menu}
        </S.TabElement>
      ))}
    </S.TabMenuContainer>
  );
}
