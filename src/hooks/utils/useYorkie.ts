import { useEffect, useRef, useState } from 'react';
import * as yorkie from 'yorkie-js-sdk';
import { useToastStore } from '@stores/useToastStore';
import { YORKIE_URL, YORKIE_API_KEY } from '@constants/api';

export default function useYorkie(documentKey: string) {
  const [content, setContent] = useState('');
  const clientRef = useRef<yorkie.Client | null>(null);
  const docRef = useRef<yorkie.Document<{ content: yorkie.Text }> | null>(null);
  const { error } = useToastStore();

  useEffect(() => {
    async function initYorkie() {
      try {
        if (!documentKey) return;

        const client = new yorkie.Client(YORKIE_URL, {
          apiKey: YORKIE_API_KEY,
        });

        await client.activate();

        clientRef.current = client;

        const doc = new yorkie.Document<{ content: yorkie.Text }>(documentKey);

        await client.attach(doc);

        docRef.current = doc;

        setContent(doc.getRoot().content?.toString() || '');

        doc.subscribe(() => {
          setContent(doc.getRoot().content.toString());
        });

        await client.sync();
      } catch (err) {
        error('Yorkie 연결 실패');
      }
    }

    initYorkie();

    return () => {
      clientRef.current?.deactivate().catch(() => {});
    };
  }, [documentKey, error]);

  const getLatestContentByKey = async (key: string) => {
    const tempClient = new yorkie.Client(YORKIE_URL, { apiKey: YORKIE_API_KEY });
    await tempClient.activate();

    const tempDoc = new yorkie.Document<{ content: yorkie.Text }>(key);
    await tempClient.attach(tempDoc);

    const latestContent = tempDoc.getRoot().content.toString();

    await tempClient.deactivate();
    return latestContent;
  };

  const updateContent = (newText: string) => {
    if (!docRef.current) {
      error('문서가 아직 초기화되지 않았습니다.');
      return;
    }

    try {
      docRef.current.update((root) => {
        if (!root.content) {
          // eslint-disable-next-line no-param-reassign
          root.content = new yorkie.Text();
        }
        root.content.edit(0, root.content.length, newText);
      });

      clientRef.current?.sync().catch(() => {});
    } catch (err) {
      error('Yorkie 업데이트 실패');
    }
  };

  return { content, updateContent, getLatestContentByKey };
}
