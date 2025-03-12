import { useEffect, useRef, useState } from 'react';
import * as yorkie from 'yorkie-js-sdk';
import { useToastStore } from '@stores/useToastStore';
import { YORKIE_URL, YORKIE_API_KEY } from '@constants/api';

export default function useYorkie(documentKey: string) {
  const [doc, setDoc] = useState<yorkie.Document<{ content: yorkie.Text }> | null>(null);
  const [content, setContent] = useState('');
  const clientRef = useRef<yorkie.Client | null>(null);
  const { error } = useToastStore();

  useEffect(() => {
    async function initYorkie() {
      try {
        if (!documentKey || documentKey.length < 4 || documentKey.length > 120) {
          return;
        }

        const client = new yorkie.Client(YORKIE_URL, {
          apiKey: YORKIE_API_KEY,
          reconnectStreamDelay: 2000,
          syncLoopDuration: 3000,
        });

        await client.activate();
        clientRef.current = client;

        const newDoc = new yorkie.Document<{ content: yorkie.Text }>(documentKey);
        await client.attach(newDoc);

        newDoc.update((root) => {
          if (!root.content) {
            // eslint-disable-next-line no-param-reassign
            root.content = new yorkie.Text();
          }
        });

        setDoc(newDoc);

        newDoc.subscribe(() => {
          setContent(newDoc.getRoot().content.toString());
        });

        client.sync();
      } catch (err) {
        error(`Yorkie 연결 실패:${err}`);
      }
    }

    initYorkie();

    return () => {
      clientRef.current?.deactivate();
    };
  }, [documentKey, error]);

  const updateContent = (newText: string) => {
    if (doc) {
      try {
        doc.update((root) => {
          const textContent = root.content as yorkie.Text;
          textContent.edit(0, textContent.length, newText);
        });
        clientRef.current?.sync();
      } catch (err) {
        error(`Yorkie 업데이트 실패:${err}`);
      }
    }
  };

  return { content, updateContent };
}
