import { useDraggable } from '@hooks/utils/useDraggable';

import { ActiveTab } from '@customTypes/space';
import { UserRoleData } from '@customTypes/user';

import AvatarGroup from '@components/_common/molecules/AvatarGroup';
import UserTabList from './UserTabList';
import CodeEditor from './CodeEditor';
import ResizablePanel from '../ResizablePanel';
import ExecutionPanel from './ExecutionPanel';

import S from './style';

export interface CodeExecutorProps {
  activeTabs?: ActiveTab[];
  language?: { languageId: number; languageName: string; languageImageUrl: string };
  code?: string;
  onCodeChange?: (newText: string) => void;
  disabled?: boolean;
  activeUsers?: UserRoleData[];
  totalUserCount?: number;
  setInput?: React.Dispatch<React.SetStateAction<string>>;
  output?: string;
}

export default function CodeExecutor({
  activeTabs,
  language,
  code,
  onCodeChange,
  disabled,
  activeUsers,
  totalUserCount,
  setInput,
  output,
}: CodeExecutorProps) {
  const { value: height, containerRef, handleMouseDown } = useDraggable({ direction: 'y', initialValue: 70 });

  return (
    <S.Container ref={containerRef}>
      {disabled ? (
        <S.DisabledSection height={height}>
          <AvatarGroup
            users={activeUsers}
            size='lg'
          />
          <S.UserCount>{`${activeUsers.length} / ${totalUserCount}`}</S.UserCount>
        </S.DisabledSection>
      ) : (
        <S.ActiveSection height={height}>
          <UserTabList tabs={activeTabs} />

          <CodeEditor
            language={language.languageName}
            code={code}
            onChange={onCodeChange}
          />
        </S.ActiveSection>
      )}

      <ResizablePanel
        direction='x'
        onMouseDown={handleMouseDown}
      />

      <ExecutionPanel
        setInput={setInput}
        output={output}
        disabled={disabled}
      />
    </S.Container>
  );
}
