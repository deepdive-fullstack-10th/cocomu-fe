import { Outlet } from 'react-router-dom';

import useGetUserInfo from '@hooks/user/useGetUserInfo';
import { useUserStore } from '@stores/useUserStore';

import NavBar from '@components/NavBar';
import Loading from '@pages/Loading';

import Footer from '@pages/MainLayout/Footer';
import S from './style';

export default function MainLayout() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const setUserId = useUserStore((state) => state.setUserId);
  const { data, isLoading } = useGetUserInfo({ enabled: isLoggedIn });

  if (isLoading) return <Loading />;

  if (data?.id) {
    setUserId(data.id);
  }

  return (
    <S.MainContainer>
      <NavBar
        isLoggedIn={isLoggedIn}
        user={data}
      />
      <S.Container>
        <Outlet />
      </S.Container>
      <Footer />
    </S.MainContainer>
  );
}
