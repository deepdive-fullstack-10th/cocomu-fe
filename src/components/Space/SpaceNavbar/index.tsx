import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

import { ROUTES } from '@constants/path';

import IconButton from '@components/_common/atoms/IconButton';
import Timer from '@components/_common/atoms/Timer';

import S from './style';

interface SpaceNavbarProps {
  studyId: number;
  name: string;
  timer?: number;
  children: ReactNode;
}

export default function SpaceNavbar({ studyId, name, timer, children }: SpaceNavbarProps) {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.LeftSection>
        <IconButton
          content='돌아가기'
          align='center'
          color='none'
          onClick={() => navigate(ROUTES.STUDY.DETAIL({ studyId }))}
        >
          <BsArrowLeft />
        </IconButton>
        <S.Name>{name}</S.Name>
      </S.LeftSection>
      <S.RightSection>
        {timer && <Timer timer={timer} />}
        {children}
      </S.RightSection>
    </S.Container>
  );
}
