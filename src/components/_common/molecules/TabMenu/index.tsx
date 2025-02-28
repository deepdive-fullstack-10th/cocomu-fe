import React from 'react';
import S from './style';

type TabMenuProps<T extends readonly string[]> = {
  tabs: T;
  currentPath: string;
  studyId?: string;
};

export default function TabMenu<T extends readonly string[]>({ tabs, currentPath, studyId }: TabMenuProps<T>) {
  const getPath = (menu: string) => {
    if (menu === '코딩 스페이스') {
      return `/study/${studyId}`;
    }
    if (menu === '멤버 보기') {
      return `/study/${studyId}/members`;
    }
    if (menu === '스터디 정보') {
      return `/study/${studyId}/info`;
    }
    return '/';
  };

  return (
    <S.TabMenuContainer>
      {tabs.map((menu) => (
        <S.StyledLink
          key={menu}
          to={getPath(menu)}
        >
          <S.TabElement isSelected={currentPath === getPath(menu)}>{menu}</S.TabElement>
        </S.StyledLink>
      ))}
    </S.TabMenuContainer>
  );
}
