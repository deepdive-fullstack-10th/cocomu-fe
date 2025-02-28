import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const DetailTabContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StudyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 2.2rem 2.4rem;
`;

export const StudyTitle = styled.h1`
  ${theme.font.heading[600]};
  color: ${theme.color.gray[950]};
`;

export const IconButtonWrapper = styled.div`
  margin-left: auto;
`;
