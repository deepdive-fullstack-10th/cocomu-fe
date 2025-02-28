import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

import * as S from './style';
import DetailTab from './DetailTab';

export default function StudyDetail() {
  const { studyId } = useParams<{ studyId: string }>();

  return (
    <S.Container>
      <DetailTab studyId={studyId} />
      <Outlet />
    </S.Container>
  );
}
