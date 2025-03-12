import Icon from '@components/_common/atoms/Icon';
import { BsSend } from 'react-icons/bs';
import S from './style';

interface ChatInputFieldProps {
  onSubmit?: () => void;
  onClick?: () => void;
}

export default function ChatInputField({ onSubmit, onClick }: ChatInputFieldProps) {
  return (
    <S.Container>
      <S.ChatInputField
        placeholder='Send Message'
        onSubmit={onSubmit}
      />
      <Icon
        size='md'
        color='700'
        onClick={onClick}
      >
        <BsSend />
      </Icon>
    </S.Container>
  );
}
