import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

export type UserProfileSize = 'sm' | 'md' | 'lg';

const sizeStyle = {
  sm: (theme: Theme) => css`
    margin-left: 0.5rem;
    ${theme.font.common.defaultAccent}
  `,
  md: (theme: Theme) => css`
    margin-left: 0.8rem;
    ${theme.font.heading[200]}
  `,
  lg: (theme: Theme) => css`
    margin-left: 2rem;
    ${theme.font.heading[600]}
  `,
};

const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileLabelName = styled.div<{ size: UserProfileSize }>`
  ${({ size, theme }) => sizeStyle[size](theme)};

  color: ${({ theme }) => theme.color.gray[900]};
`;

const S = {
  UserProfileContainer,
  ProfileLabelName,
};

export default S;
