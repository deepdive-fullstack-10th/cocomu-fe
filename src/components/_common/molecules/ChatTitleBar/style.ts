import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 60rem;
  border: 1px solid ${({ theme }) => theme.color.gray[600]};

  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0.8rem;
`;

const ChatInfoSection = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  ${({ theme }) => theme.font.heading[200]};
  color: ${({ theme }) => theme.color.gray[950]};
  padding: 0.5rem 1rem 0.5rem 0.2rem;
`;

const UserCount = styled.div`
  color: ${({ theme }) => theme.color.gray[700]};
`;

const S = {
  Container,
  ChatInfoSection,
  Title,
  UserCount,
};

export default S;
