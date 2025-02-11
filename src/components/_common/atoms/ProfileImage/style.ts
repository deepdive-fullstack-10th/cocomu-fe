import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

type profileSizeprops = 'lg' | 'md' | 'sm';

type profileImageContainerProps = {
  size: profileSizeprops;
  upload: boolean;
};

type uploadButtonprops = {
  size: profileSizeprops;
};

const containerSizeStyles = {
  lg: css`
    width: 8rem;
    height: 8rem;
  `,
  md: css`
    width: 6rem;
    height: 6rem;
  `,
  sm: css`
    width: 4rem;
    height: 4rem;
  `,
};

const uploadButtonSizeStyles = {
  lg: (theme: Theme) => css`
    bottom: 0.3rem;
    padding: 0.5rem;

    ${theme.font.heading[400]}
  `,
  md: (theme: Theme) => css`
    bottom: 1rem;
    padding: 0.3rem;

    ${theme.font.heading[100]}
  `,
  sm: (theme: Theme) => css`
    bottom: 0.5rem;
    padding: 0.23rem;

    ${theme.font.common.smallAccent}
  `,
};

const ProfileImageContainer = styled.div<profileImageContainerProps>`
  position: relative;

  ${({ size }) => containerSizeStyles[size]}
  border-radius: 50%;

  cursor: ${({ upload }) => (upload ? 'pointer' : undefined)};
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const UploadButton = styled.button<uploadButtonprops>`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  right: 0;

  ${({ size, theme }) => uploadButtonSizeStyles[size](theme)}

  color: ${({ theme }) => theme.color.gray[50]};
  background: ${({ theme }) => theme.color.primary[300]};

  border-radius: 50%;
`;

const S = {
  ProfileImageContainer,
  ProfileImage,
  UploadButton,
};

export default S;
