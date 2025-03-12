import { useState } from 'react';
import { ActiveTab } from '@customTypes/space';
import { UserTabColor } from './UserTab/style';
import UserTab from './UserTab';
import S from './style';

const tabColors: UserTabColor[] = ['primary', 'secondary', 'analogous', 'triadic'];

interface UserTabListProps {
  tabs?: ActiveTab[];
  selectUser?: (userId: number) => void;
}

export default function UserTabList({ tabs = [], selectUser }: UserTabListProps) {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(tabs.length > 0 ? tabs[0].userId : null);

  const handleUserClick = (userId: number) => {
    setSelectedUserId(userId);
    selectUser?.(userId);
  };

  return (
    <S.Container>
      {tabs.map((tab, index) => (
        <UserTab
          key={tab?.tabId ?? tab?.userId ?? `tab-${index}`}
          color={tabColors[index % tabColors.length]}
          name={tab?.nickname}
          isSelected={tab?.userId === selectedUserId}
          onClick={() => handleUserClick(tab?.userId)}
        />
      ))}
    </S.Container>
  );
}
