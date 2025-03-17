import Icon from '@components/_common/atoms/Icon';
import { BsPerson, BsDashLg } from 'react-icons/bs';
import S from './style';

interface ChatTitleBarProps {
  title: string;
  activeUserCount: number;
  totalUserCount: number;
}

export default function ChatTitleBar({ title, activeUserCount, totalUserCount }: ChatTitleBarProps) {
  const handleModalClose = () => {
    /* todo: 채팅 모달 닫기 */
  };

  return (
    <S.Container>
      <S.ChatInfoSection>
        <S.Title>{title}</S.Title>
        <Icon
          size='sm'
          color='700'
        >
          <BsPerson />
        </Icon>
        <S.UserCount>{`${activeUserCount}/${totalUserCount}`}</S.UserCount>
      </S.ChatInfoSection>
      <Icon
        size='sm'
        color='700'
        onClick={handleModalClose}
      >
        <BsDashLg />
      </Icon>
    </S.Container>
  );
}
