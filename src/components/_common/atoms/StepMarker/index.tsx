import React from 'react';
import S from './style';

interface StepMarkerProps {
  step: number;
}

export default function StepMarker({ step }: StepMarkerProps) {
  return <S.StepContainer>{step}</S.StepContainer>;
}
