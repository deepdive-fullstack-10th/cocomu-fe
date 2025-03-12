import { useEffect, useRef, useState } from 'react';
import * as yorkie from 'yorkie-js-sdk';

export default function useYorkie(documentKey: string) {
  const [doc, setDoc] = useState<yorkie.Document<{ content: yorkie.Text }> | null>(null);
  const [content, setContent] = useState('');
  const clientRef = useRef<yorkie.Client | null>(null);

  useEffect(() => {
    async function initYorkie() {
      try {
        if (!documentKey || documentKey.length < 4 || documentKey.length > 120) {
          return;
        }

        const client = new yorkie.Client('https://api.yorkie.dev', {
          reconnectStreamDelay: 2000,
          syncLoopDuration: 5000,
        });

        await client.activate().catch(() => {});
        clientRef.current = client;

        const newDoc = new yorkie.Document<{ content: yorkie.Text }>(documentKey);
        await client.attach(newDoc).catch(() => {});

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
      } catch (error) {
        // 🔇 모든 에러 무시
      }
    }

    initYorkie();

    return () => {
      clientRef.current?.deactivate();
    };
  }, [documentKey]);

  const updateContent = (newText: string) => {
    if (doc) {
      try {
        doc.update((root) => {
          const textContent = root.content as yorkie.Text;
          textContent.edit(0, textContent.length, newText);
        });
        clientRef.current?.sync();
      } catch (error) {
        // 🔇 에러 무시
      }
    }
  };

  return { content, updateContent };
}
