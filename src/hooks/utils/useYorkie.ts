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

        try {
          await client.activate();
          clientRef.current = client;
        } catch (activateError) {
          error('Yorkie 클라이언트 활성화 실패');
          return; // 실패 시 중단
        }

        const doc = new yorkie.Document<{ content: yorkie.Text }>(documentKey);

        try {
          await client.attach(doc);
          docRef.current = doc;
        } catch (attachError) {
          error('Yorkie 문서 첨부 실패');
          return;
        }

        setContent(doc.getRoot().content?.toString() || '');

        doc.subscribe(() => {
          setContent(doc.getRoot().content.toString());
        });

        if (client.isActive()) {
          await client.sync();
        }
      } catch (err) {
        error('Yorkie 연결 실패');
      }
    }

    initYorkie();

    return () => {
      if (clientRef.current?.isActive()) {
        clientRef.current?.deactivate().catch(() => {});
      }
    };
  }, [documentKey, error]);

  const getLatestContentByKey = async (key: string) => {
    try {
      const tempClient = new yorkie.Client(YORKIE_URL, { apiKey: YORKIE_API_KEY });
      await tempClient.activate();

      const tempDoc = new yorkie.Document<{ content: yorkie.Text }>(key);
      await tempClient.attach(tempDoc);

      const latestContent = tempDoc.getRoot().content.toString();

      if (tempClient.isActive()) {
        await tempClient.deactivate();
      }

      return latestContent;
    } catch (err) {
      error('Yorkie 최신 코드 가져오기 실패');
      return '';
    }
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

      if (clientRef.current?.isActive()) {
        clientRef.current.sync().catch(() => {});
      }
    } catch (err) {
      error('Yorkie 업데이트 실패');
    }
  };

  return { content, updateContent, getLatestContentByKey };
}
