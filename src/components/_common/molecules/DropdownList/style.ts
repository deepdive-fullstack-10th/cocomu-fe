import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

const commonStyles = (theme: Theme) => css`
  border: 1px solid ${theme.color.gray[600]};
  border-radius: 8px;
  width: 100%;
  height: auto;
`;

const DropdownList = styled.div`
  ${({ theme }) => commonStyles(theme)}
`;

const S = {
  DropdownList,
};

export default S;
