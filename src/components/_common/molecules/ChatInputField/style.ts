import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 50rem;

  justify-content: space-between;
  border-radius: 16rem;
  border: 1px solid ${({ theme }) => theme.color.gray[700]};
  padding: 1rem;
`;

const ChatInputField = styled.input`
  margin: 0.3rem 0.5rem;
  width: 90%;
  border: none;
  &:focus {
    outline: none;
  }
`;

const S = {
  Container,
  ChatInputField,
};

export default S;
