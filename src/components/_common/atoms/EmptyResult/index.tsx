import React from 'react';
import { EmptyResultContainer } from './style';

interface EmptyResultProps {
  isStudy: boolean;
}

export default function EmptyResult({ isStudy }: EmptyResultProps) {
  const EMPTY_RESULT_IMAGE_STUDY = 'https://cdn.cocomu.co.kr/images/default/empty_study.png';
  const EMPTY_RESULT_IMAGE_SPACE = 'https://cdn.cocomu.co.kr/images/default/empty_space.png';

  return (
    <EmptyResultContainer>
      <img
        src={isStudy ? EMPTY_RESULT_IMAGE_STUDY : EMPTY_RESULT_IMAGE_SPACE}
        alt='Empty results found'
      />
    </EmptyResultContainer>
  );
}
