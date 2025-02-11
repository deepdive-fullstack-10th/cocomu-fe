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
    padding: 0.5rem;
    ${theme.font.heading[100]}
  `,
  md: (theme: Theme) => css`
    padding: 0.3rem;
    ${theme.font.common.default}
  `,
  sm: (theme: Theme) => css`
    padding: 0.2rem;
    ${theme.font.common.smallAccent}
  `,
};

const uploadProfileImgeContainer = (theme: Theme) => css`
  border: 1px solid ${theme.color.gray[500]};
  padding: 0.3rem;
  cursor: pointer;
  background: ${theme.color.gray[50]};
`;

const ProfileImageContainer = styled.div<profileImageContainerProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  ${({ size }) => containerSizeStyles[size]}

  ${({ upload, theme }) => upload && uploadProfileImgeContainer(theme)};
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;

  margin-left: 0.3rem;

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

  bottom: 0rem;
  border-radius: 50%;
`;

const S = {
  ProfileImageContainer,
  ProfileImage,
  UploadButton,
};

export default S;
