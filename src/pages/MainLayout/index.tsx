import { Outlet } from 'react-router-dom';

import useGetUserInfo from '@hooks/user/useGetUserInfo';
import { useUserStore } from '@stores/useUserStore';

import NavBar from '@components/NavBar';
import Loading from '@pages/Loading';

import { NAVBAR_DROPDOWN_LABELS } from '@constants/constants';

import S from './style';

export default function MainLayout() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const { data, isLoading } = useGetUserInfo({ enabled: isLoggedIn });

  if (isLoading) return <Loading />;

  return (
    <S.MainContainer>
      <NavBar
        items={NAVBAR_DROPDOWN_LABELS}
        isLoggedIn={isLoggedIn}
        user={data}
      />
      <S.Container>
        <Outlet />
      </S.Container>
    </S.MainContainer>
  );
}
