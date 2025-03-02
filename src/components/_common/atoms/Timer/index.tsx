import { generateTimer } from '@utils/timeUtils';
import S from './style';

interface TimerProps {
  timer: number;
}

export default function Timer({ timer }: TimerProps) {
  return <S.Timer>{generateTimer(timer * 60)}</S.Timer>;
}
