import { useState } from 'react';
import S from './style';

type TabMenuProps<T extends readonly string[]> = {
  tab: T;
  onTabChange?: (index: number) => void;
  defaultTab?: number;
};

export default function TabMenu<T extends readonly string[]>({ tab, onTabChange, defaultTab = 0 }: TabMenuProps<T>) {
  const [tabIndex, setTabIndex] = useState(defaultTab);

  const handleClick = (index: number) => {
    setTabIndex(index);
    onTabChange?.(index);
  };

  return (
    <S.TabMenuContainer>
      {tab.map((element, index) => (
        <S.TabElement
          key={element}
          onClick={() => handleClick(index)}
          $isSelected={tabIndex === index}
        >
          {element}
        </S.TabElement>
      ))}
    </S.TabMenuContainer>
  );
}
