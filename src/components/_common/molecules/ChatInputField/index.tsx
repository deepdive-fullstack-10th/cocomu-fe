import Icon from '@components/_common/atoms/Icon';
import { BsSend } from 'react-icons/bs';
import { ChangeEvent, FormEvent, useState } from 'react';
import S from './style';

interface ChatInputFieldProps {
  onSubmit?: (message: string) => void;
}

export default function ChatInputField({ onSubmit }: ChatInputFieldProps) {
  const [chatContent, setChatContent] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChatContent(e.target.value);
  };

  const handleSendChat = (e?: FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    if (chatContent.trim()) {
      onSubmit(chatContent);
      setChatContent('');
    }
  };

  return (
    <form onSubmit={handleSendChat}>
      <S.Container>
        <S.ChatInputField
          placeholder='Send Message'
          onChange={handleInputChange}
          value={chatContent}
        />
        <Icon
          size='md'
          color='700'
          onClick={() => handleSendChat()}
        >
          <BsSend />
        </Icon>
      </S.Container>
    </form>
  );
}
