import { useCallback, useEffect, useRef, useState } from 'react';
import S from './style';

interface ChatAlertProps {
  participant: string[];
}

export default function ChatAlert({ participant }: ChatAlertProps) {
  const [alerts, setAlerts] = useState<string>('');
  const isInitialRender = useRef(true);
  const prevParticipantsRef = useRef<string[]>([]);

  const getDefaultAlert = useCallback(
    (newParticipants: string[]): string =>
      newParticipants.length === 1
        ? `${newParticipants[0]} 님이 입장하셨습니다.`
        : `${newParticipants.join(', ')} 님이 입장하셨습니다.`,
    [],
  );

  useEffect(() => {
    if (isInitialRender.current) {
      if (participant.length > 0) {
        setAlerts(getDefaultAlert(participant));
      }
      isInitialRender.current = false;
    } else {
      const newParticipants = participant.filter((p) => !prevParticipantsRef.current.includes(p));
      if (newParticipants.length > 0) {
        setAlerts(getDefaultAlert(newParticipants));
      }
    }

    prevParticipantsRef.current = [...participant];
  }, [participant, getDefaultAlert]);

  return (
    <S.TextWrapper>
      <S.AlertText>{alerts}</S.AlertText>
    </S.TextWrapper>
  );
}
