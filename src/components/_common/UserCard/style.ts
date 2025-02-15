import styled from '@emotion/styled';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 1.5rem;
  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  background: ${({ theme }) => theme.color.gray[100]};
  padding: 1.5rem 3rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
`;

const ProfileText = styled.span`
  font: ${({ theme }) => theme.font.common.smallAccent};
  color: ${({ theme }) => theme.color.gray[900]};
`;

const S = {
  CardContainer,
  ProfileContainer,
  ProfileText,
};

export default S;
