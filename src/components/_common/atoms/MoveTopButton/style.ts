import styled from '@emotion/styled';

export const ScrollButton = styled.button`
  position: fixed;
  width: 8rem;
  height: 8rem;
  right: 5%;
  bottom: 5%;

  border-radius: 100rem;
  border: 2px solid ${({ theme }) => theme.color.primary[600]};
  background-color: ${({ theme }) => theme.color.gray[100]};
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary[50]};
    transform: scale(1.1, 1.1);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.span`
  ${({ theme }) => theme.font.heading[200]};
  color: ${({ theme }) => theme.color.primary[600]};
`;

const S = {
  ScrollButton,
  IconContainer,
  ButtonText,
};

export default S;
