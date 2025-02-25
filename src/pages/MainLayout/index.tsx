import NavBar from '@components/NavBar';
import { NAVBAR_DROPDOWN_LABELS } from '@constants/constants';
import { Outlet } from 'react-router-dom';
import S from './style';

export default function MainLayout() {
  return (
    <S.MainContainer>
      <NavBar
        items={NAVBAR_DROPDOWN_LABELS}
        isLogined={false}
      />
      <S.Container>
        <Outlet />
      </S.Container>
    </S.MainContainer>
  );
}
