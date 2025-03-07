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

const StudyTitle = styled.h1`
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

const Dropdown = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 0;
  background-color: ${theme.color.gray[50]};
  overflow: hidden;
  z-index: 1;
  border: 1px solid ${theme.color.gray[600]};
  border-radius: 0.8rem;
  user-select: none;
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
  StudyIntro,
  IconContainer,
  Dropdown,
};

export default S;
