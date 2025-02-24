import React from 'react';
import S from './style';

interface StepMarkerProps {
  step: 'Step1' | 'Step2';
}

export default function StepMarker({ step }: StepMarkerProps) {
  return <S.StepContainer>{step === 'Step1' ? '1' : '2'}</S.StepContainer>;
}
