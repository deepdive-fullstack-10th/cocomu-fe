import { css } from '@emotion/react';

const typography = {
  family: {
    primary: 'Pretendard',
    code: 'SF Mono, monospace',
  },
  accent: 600,

  heading: {
    900: css`
      font-weight: 700;
      font-size: 3.5rem;
      line-height: 4rem;
      letter-spacing: 0;
    `,
    800: css`
      font-weight: 700;
      font-size: 2.9rem;
      line-height: 3.2rem;
      letter-spacing: 0;
    `,
    700: css`
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 2.8rem;
      letter-spacing: 0;
    `,
    600: css`
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.4rem;
      letter-spacing: 0;
    `,
    500: css`
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 2rem;
      letter-spacing: 0;
    `,
    400: css`
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 1.6rem;
      letter-spacing: 0;
    `,
    300: css`
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.6rem;
      letter-spacing: 0;
    `,
    200: css`
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.6rem;
      letter-spacing: 0;
    `,
    100: css`
      font-weight: 600;
      font-size: 1.1rem;
      line-height: 1.6rem;
      letter-spacing: 0;
    `,
  },

  common: {
    default: css`
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2rem;
      letter-spacing: 0;
    `,
    paragraph: css`
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2.4rem;
      letter-spacing: 0;
    `,
    block: css`
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2rem;
      letter-spacing: 0;
      margin-bottom: 2.8rem;
    `,
    code: css`
      font-family: 'SF Mono', monospace;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 2rem;
    `,
    small: css`
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.4rem;
      letter-spacing: 0;
    `,
    smallAccent: css`
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 1.4rem;
      letter-spacing: 0;
    `,
    smallBlock: css`
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 2rem;
      letter-spacing: 0;
    `,
    large: css`
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2rem;
      letter-spacing: 0;
    `,
    largeAccent: css`
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 2rem;
      letter-spacing: 0;
    `,
    largeBlock: css`
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2rem;
      letter-spacing: 0;
    `,
  },
};

export default typography;
