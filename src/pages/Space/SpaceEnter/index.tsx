import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import Loading from '@pages/Loading';
import useEnterSpace from '@hooks/space/useEnterSpace';
import useStompClient from '@hooks/utils/useSoket';

export default function SpaceEnter() {
  const { codingSpaceId } = useParams<{ codingSpaceId: string }>();
  const { enterSpaceMutate, isLoading } = useEnterSpace(Number(codingSpaceId));

  const messages = useStompClient({});

  console.log(messages);
  useEffect(() => {
    console.log(1);
    enterSpaceMutate(codingSpaceId);
    console.log(2);
  }, [codingSpaceId, enterSpaceMutate]);

  if (isLoading) return <Loading />;

  return <Outlet />;
}
