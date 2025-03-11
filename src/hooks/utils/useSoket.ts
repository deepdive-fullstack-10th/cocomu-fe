import { useEffect, useState } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { STOMP_ENDPOINTS } from '@constants/api';

interface UseStompClientProps {
  codingSpaceId: string;
}

export default function useStompClient({ codingSpaceId }: UseStompClientProps) {
  const [messages, setMessages] = useState<string>();

  useEffect(() => {
    const socket = new SockJS(STOMP_ENDPOINTS.CONNECT);
    const client = new Client({
      webSocketFactory: () => socket,

      connectHeaders: { Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}` },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        client.subscribe(STOMP_ENDPOINTS.SPACE_SUBSCRIBE(codingSpaceId), (message) => {
          setMessages(message.body);
        });
      },
      onStompError: (frame) => {
        console.error('⚠️ STOMP 오류 발생:', frame); // eslint-disable-line no-console
      },
    });

    client.activate();

    return () => {
      if (client.connected) {
        client.deactivate();
      }
    };
  }, [codingSpaceId]);

  return messages;
}
