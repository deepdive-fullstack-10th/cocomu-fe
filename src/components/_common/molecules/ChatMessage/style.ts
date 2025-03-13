import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { css } from '@emotion/react';

export interface ChatMessageStyleProps {
  isMe: boolean;
}

const chatMessageContainerStyles = ({ isMe }: ChatMessageStyleProps) => css`
  display: flex;
  align-items: ${isMe === true ? 'flex-end' : 'flex-start'};
  justify-content: ${isMe === true ? 'flex-end' : 'flex-start'};
  flex-direction: column;
`;

const profileWrapStyles = ({ isMe }: ChatMessageStyleProps) => css`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  gap: 0.8rem;
  flex-direction: ${isMe === true ? 'row-reverse' : 'row'};
`;

const messageWrapStyles = ({ isMe }: ChatMessageStyleProps) => css`
  display: flex;
  align-items: flex-start;
  flex-direction: ${isMe === true ? 'row-reverse' : 'row'};
`;

const messageBoxStyles = ({ isMe }: ChatMessageStyleProps) => css`
  padding: 1rem 1.5rem;
  background: ${isMe === true ? theme.color.secondary[900] : theme.color.gray[50]};
  border-radius: ${isMe === true ? '1.2rem 0 1.2rem 1.2rem' : '0 1.2rem 1.2rem 1.2rem'};
  position: relative;
  color: ${isMe === true ? theme.color.gray[50] : theme.color.gray[900]};
  font-size: 1rem;
  line-height: 1.5;

  &::before {
    content: '';
    position: absolute;
    top: -0.8rem;
    ${isMe === true ? 'right' : 'left'}: 0;
    width: 2rem;
    height: 1rem;
    background: inherit;
    clip-path: ${isMe === true ? 'polygon(100% 100%, 100% 0, 0 100%)' : 'polygon(0 100%, 0 0, 100% 100%)'};
    border-radius: ${isMe === true ? '0 0.8rem 0 0' : '0.8rem 0 0 0'};
  }
`;

export const ChatMessageContainer = styled.div<ChatMessageStyleProps>(chatMessageContainerStyles);
export const ProfileWrap = styled.div<ChatMessageStyleProps>(profileWrapStyles);
export const MessageWrap = styled.div<ChatMessageStyleProps>(messageWrapStyles);
export const MessageBox = styled.div<ChatMessageStyleProps>(messageBoxStyles);

export const TimeText = styled.div`
  ${theme.font.common.small};
  color: ${theme.color.gray[600]};
`;

export const EmptySpace = styled.div`
  width: 4rem;
`;

export const ProfileName = styled.div`
  ${theme.font.common.defaultAccent};
  color: ${theme.color.gray[700]};
`;

const S = {
  ChatMessageContainer,
  ProfileWrap,
  TimeText,
  MessageWrap,
  EmptySpace,
  MessageBox,
  ProfileName,
};

export default S;
