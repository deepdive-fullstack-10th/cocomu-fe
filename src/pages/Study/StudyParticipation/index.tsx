import { Outlet, useNavigate } from 'react-router-dom';

import { BsArrowLeft } from 'react-icons/bs';

import { ROUTES } from '@constants/path';

import IconButton from '@components/_common/atoms/IconButton';

import S from './style';

export default function StudyParticipation() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.ButtonWrapper>
        <IconButton
          content='다른 스터디 보러가기'
          onClick={() => navigate(ROUTES.ROOT())}
        >
          <BsArrowLeft />
        </IconButton>
      </S.ButtonWrapper>

      <Outlet />
    </S.Container>
  );
}
