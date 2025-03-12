import MonacoEditor from '@monaco-editor/react';
import S from './style';

interface CodeEditorProps {
  language: string;
  code: string;
  onChange: (newText: string) => void;
}

export default function CodeEditor({ language, code, onChange }: CodeEditorProps) {
  return (
    <S.Container>
      <MonacoEditor
        defaultLanguage={language}
        theme='vs'
        options={{
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
        value={code}
        onChange={onChange}
      />
    </S.Container>
  );
}
