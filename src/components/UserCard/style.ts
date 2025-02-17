import styled from '@emotion/styled';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 2px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 2.5rem;
  background: ${({ theme }) => theme.color.gray[50]};
  padding: 2.5rem 6rem;

  width: 100%;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 9rem;
`;

const Text = styled.span`
  ${({ theme }) => theme.font.heading[100]};
  color: ${({ theme }) => theme.color.gray[900]};
`;

const S = {
  CardContainer,
  Info,
  Text,
};

export default S;
