import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import Loading from '@pages/Loading';
import useEnterSpace from '@hooks/space/useEnterSpace';

export default function SpaceEnter() {
  const { codingSpaceId } = useParams();
  const { enterSpaceMutate, isLoading } = useEnterSpace(Number(codingSpaceId));

  useEffect(() => {
    enterSpaceMutate(codingSpaceId);
  }, []);

  if (isLoading) return <Loading />;

  return <Outlet />;
}
