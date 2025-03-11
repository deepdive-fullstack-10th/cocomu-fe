import { useEffect, useState } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

interface UseStompClientProps {
  wsUrl: string;
  subscribeUrl: string;
  token?: string;
}

export default function useStompClient({ wsUrl, subscribeUrl, token }: UseStompClientProps) {
  const [messages, setMessages] = useState<string>();

  useEffect(() => {
    const socket = new SockJS(wsUrl);
    const client = new Client({
      webSocketFactory: () => socket,

      connectHeaders: token ? { Authorization: `Bearer ${token}` } : {},
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        client.subscribe(subscribeUrl, (message) => {
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
  }, [wsUrl, token, subscribeUrl]);

  return messages;
}
