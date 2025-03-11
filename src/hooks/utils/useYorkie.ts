import { useEffect, useRef, useState } from 'react';
import * as yorkie from 'yorkie';
import { BASE_URL } from '@constants/api';

export default function useYorkie(documentKey: string) {
  const [doc, setDoc] = useState<yorkie.Document | null>(null);
  const [content, setContent] = useState('');
  const clientRef = useRef<yorkie.Client | null>(null); // ✅ useRef로 client 관리

  useEffect(() => {
    async function initYorkie() {
      const newClient = new yorkie.Client(BASE_URL);
      await newClient.activate();

      const newDoc = new yorkie.Document(documentKey);
      await newClient.attach(newDoc);

      newDoc.update((root) => {
        // eslint-disable-next-line no-param-reassign
        if (!root.content) root.content = '';
      });

      setDoc(newDoc);
      clientRef.current = newClient; // ✅ client를 useRef에 저장

      newDoc.subscribe(() => {
        setContent(newDoc.getRoot().content);
      });

      newClient.sync();
    }

    initYorkie();

    return () => {
      clientRef.current?.deactivate(); // ✅ useRef에서 최신 client 가져와 정리
    };
  }, [documentKey]);

  const updateContent = (newText: string) => {
    if (doc) {
      doc.update((root) => {
        // eslint-disable-next-line no-param-reassign
        root.content = newText;
      });
      clientRef.current?.sync();
    }
  };

  return { content, updateContent };
}
