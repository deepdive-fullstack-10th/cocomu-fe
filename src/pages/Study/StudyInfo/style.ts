import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  padding: 60px 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StudyTitle = styled.h1`
  ${({ theme }) => theme.font.heading[700]};
  padding: 2.2rem 0;
  color: ${({ theme }) => theme.color.gray[950]};
`;

const TagContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 11.3rem;
  padding: 4.3rem 0 5.2rem;
  justify-content: start;
  align-self: flex-start;
`;

const TagText = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  ${({ theme }) => theme.font.common.default};
  gap: 1rem;
  overflow: hidden;

  & > span {
    white-space: nowrap;
  }
`;

const ProjectIntro = styled.h2`
  ${({ theme }) => theme.font.heading[400]};
  padding: 2rem 0;
`;

const Description = styled.p`
  white-space: pre-line;
  ${({ theme }) => theme.font.common.default};
`;

// 아이콘 컨테이너
const IconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  & > svg {
    font-size: 1.8rem;
  }
`;

// 드롭다운 스타일
const Dropdown = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 0;
  background: ${({ theme }) => theme.color.gray[50]};
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
