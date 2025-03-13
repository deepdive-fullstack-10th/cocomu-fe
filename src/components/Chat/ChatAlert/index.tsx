import { useEffect, useRef, useState } from 'react';
import S from './style';

interface ChatAlertProps {
  participant: string[];
}

export default function ChatAlert({ participant }: ChatAlertProps) {
  const [alerts, setAlerts] = useState<string>('');
  const isInitialRender = useRef(true);
  const prevParticipantsRef = useRef<string[]>([]);

  useEffect(() => {
    if (isInitialRender.current) {
      if (participant.length > 0) {
        const initialAlert =
          participant.length === 1
            ? `${participant[0]} 님이 입장하였습니다.`
            : `${participant.join(', ')} 님이 입장하였습니다.`;
        setAlerts(initialAlert);
      }
      isInitialRender.current = false;
    } else {
      const newParticipants = participant.filter((p) => !prevParticipantsRef.current.includes(p));
      if (newParticipants.length > 0) {
        const newAlerts =
          newParticipants.length === 1
            ? `${newParticipants[0]} 님이 입장하였습니다.`
            : `${newParticipants.join(', ')} 님이 입장하였습니다.`;
        setAlerts(newAlerts);
      }
    }

    prevParticipantsRef.current = [...participant];
  }, [participant]);

  return (
    <S.TextWrapper>
      <S.AlertText>{alerts}</S.AlertText>
    </S.TextWrapper>
  );
}
