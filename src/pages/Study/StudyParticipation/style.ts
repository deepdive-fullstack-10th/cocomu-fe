import styled from '@emotion/styled';
import { theme } from '@styles/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 7.1rem 0 2.3rem 0;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StudyTitle = styled.h1`
  padding: 2.2rem 0 0 0;
  ${theme.font.heading[600]};
`;

const TagContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 2.1rem;
  padding: 4.2rem 0 2.5rem;
  justify-content: start;
  align-self: flex-start;
`;

const TagText = styled.div`
  display: flex;
  flex-direction: column;
  ${theme.font.common.default};
  padding: 0 2.1rem 0 0;
  overflow: hidden;

  & > span {
    white-space: nowrap;
  }
`;

const StudyIntro = styled.h2`
  ${theme.font.heading[400]};
  padding: 2.7rem 0;
`;

const IconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  & > svg {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  white-space: pre-line;
  ${theme.font.common.default};
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 7rem 16rem 5rem 0rem;
  position: relative;
  z-index: 10;
`;

const S = {
  Container,
  Header,
  BodyContainer,
  StudyTitle,
  TagContainer,
  TagText,
  StudyIntro,
  Description,
  FooterContainer,
  IconContainer,
};

export default S;
