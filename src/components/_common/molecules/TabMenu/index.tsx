import React from 'react';
import { ROUTES } from '@constants/path';
import S from './style';

type TabMenuProps<T extends readonly string[]> = {
  tabs: T;
  currentPath: string;
  studyId?: string;
};

export default function TabMenu<T extends readonly string[]>({ tabs, currentPath, studyId }: TabMenuProps<T>) {
  const getPath = (menu: string) => {
    if (menu === '코딩 스페이스') {
      return studyId ? ROUTES.STUDY.DETAIL({ studyId }) : '/';
    }
    if (menu === '멤버 보기') {
      return studyId ? ROUTES.STUDY.MEMBERS({ studyId }) : '/';
    }
    if (menu === '스터디 정보') {
      return studyId ? ROUTES.STUDY.INFO({ studyId }) : '/';
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
