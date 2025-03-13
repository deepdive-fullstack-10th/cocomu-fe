import ProfileImage, { ProfileImageProps } from '@components/_common/atoms/ProfileImage';
import { UserData } from '@customTypes/user';
import S from './style';

interface ChatMessageProps extends ProfileImageProps {
  user: UserData;
  time: string;
  message: string;
  isMe: boolean;
}

export default function ChatMessage({ user, time, message, isMe }: ChatMessageProps) {
  return (
    <S.ChatMessageContainer isMe={isMe}>
      <S.ProfileWrap isMe={isMe}>
        <ProfileImage
          size='sm'
          src={user.profileImageUrl}
        />
        <S.ProfileName>{user.nickname}</S.ProfileName>
        <S.TimeText>{time}</S.TimeText>
      </S.ProfileWrap>
      <S.MessageWrap isMe={isMe}>
        <S.EmptySpace />
        <S.MessageBox isMe={isMe}>{message}</S.MessageBox>
      </S.MessageWrap>
    </S.ChatMessageContainer>
  );
}
