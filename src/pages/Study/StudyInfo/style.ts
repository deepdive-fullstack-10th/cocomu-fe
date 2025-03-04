import styled from '@emotion/styled';
import { theme } from '@styles/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LeaderName = styled.span`
  ${theme.font.common.default};
  font-weight: bold;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StudyTitle = styled.h1`
  ${theme.font.heading[600]};
`;

const TagContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.2rem 11.3rem;
  padding: 4.2rem 0 2.5rem;
  justify-content: start;
  align-self: flex-start;
`;

const TagText = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  ${theme.font.common.default};
  gap: 1rem;
  overflow: hidden;

  & > span {
    white-space: nowrap;
  }
`;

const ProjectIntro = styled.h2`
  ${theme.font.heading[400]};
  padding: 2.7rem 0;
`;

const Description = styled.p`
  white-space: pre-line;
  ${theme.font.common.default};
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

const Dropdown = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 0;
  background: ${theme.color.gray[50]};
  border-radius: 0.8rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 100;
  display: flex;
  flex-direction: column;
`;

const S = {
  Container,
  Header,
  LeaderInfo,
  LeaderName,
  BodyContainer,
  StudyTitle,
  TagContainer,
  TagText,
  ProjectIntro,
  Description,
  IconContainer,
  Dropdown,
};

export default S;
