import { useEffect, useState } from 'react';
import { generateTimer } from '@utils/timeUtils';
import S from './style';

interface TimerProps {
  timer: number; // 제한 시간 (분)
  startTime?: string; // 시작 시간 (ISO 형식) (옵션)
}

export default function Timer({ timer, startTime }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState<number>(timer * 60); // 초기 값 (초 단위 저장)

  useEffect(() => {
    if (!startTime) return; // ✅ startTime이 없으면 기본 값 유지 (고정된 시간 표시)

    const startTimestamp = new Date(startTime).getTime();
    const endTimestamp = startTimestamp + timer * 60 * 1000; // 종료 시간 계산

    const updateTimer = () => {
      const now = Date.now();
      const remainingSeconds = Math.max(0, Math.floor((endTimestamp - now) / 1000)); // 남은 초 계산
      setTimeLeft(remainingSeconds);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60 * 1000); // ✅ 1분마다 업데이트 (초 단위 X)

    return () => clearInterval(interval);
  }, [timer, startTime]);

  return <S.Timer>{generateTimer(timeLeft)}</S.Timer>;
}
