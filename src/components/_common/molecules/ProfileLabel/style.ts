import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

export type ProfileLabelSize = 'sm' | 'md' | 'lg';

const nameSize = {
  sm: (theme: Theme) => css`
    margin-left: 0.5rem;
    ${theme.font.common.default}
  `,
  md: (theme: Theme) => css`
    margin-left: 0.8rem;
    ${theme.font.heading[100]}
  `,
  lg: (theme: Theme) => css`
    margin-left: 2rem;
    ${theme.font.heading[900]}
  `,
};

const ProfileLabelContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileLabelName = styled.div<{ size: ProfileLabelSize }>`
  ${({ size, theme }) => nameSize[size](theme)};
`;

const S = {
  ProfileLabelContainer,
  ProfileLabelName,
};

export default S;
