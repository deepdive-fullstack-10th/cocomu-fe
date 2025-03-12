import React from 'react';
import { EMPTY_RESULT_IMAGES } from '@constants/common';
import { EmptyResultContainer } from './style';

interface EmptyResultProps {
  isStudy: boolean;
}

export default function EmptyResult({ isStudy }: EmptyResultProps) {
  return (
    <EmptyResultContainer>
      <img
        src={isStudy ? EMPTY_RESULT_IMAGES[0] : EMPTY_RESULT_IMAGES[1]}
        alt='Empty results found'
      />
    </EmptyResultContainer>
  );
}
