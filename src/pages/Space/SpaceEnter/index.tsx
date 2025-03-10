import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import Loading from '@pages/Loading';
import useEnterSpace from '@hooks/space/useEnterSpace';

export default function SpaceEnter() {
  const { studyId, codingSpaceId } = useParams<{ studyId: string; codingSpaceId: string }>();
  const { enterSpaceMutate, isLoading } = useEnterSpace(Number(studyId), Number(codingSpaceId));

  useEffect(() => {
    enterSpaceMutate(codingSpaceId);
  }, []);

  if (isLoading) return <Loading />;

  return <Outlet />;
}
