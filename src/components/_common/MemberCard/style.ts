import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

const memberCardContainerStyle = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 15px;
  border: 1px solid ${theme.color.gray[600]};
  background: ${theme.color.gray[100]};
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

const CardContainer = styled.div`
  ${({ theme }) => memberCardContainerStyle(theme)}
`;

const S = {
  CardContainer,
  ProfileContainer,
  ProfileText,
};

export default S;
