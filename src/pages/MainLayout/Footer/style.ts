import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  background-color: ${({ theme }) => theme.color.gray[300]};

  margin-left: calc(-50vw + 50%);
  margin-right: 0;

  align-items: center;
  justify-content: center;
  padding: 5rem 0;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  gap: 4rem;
`;

const LogoImg = styled.img`
  width: 12rem;
  object-fit: contain;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: 1rem;
`;

const MenuSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;

  gap: 4rem;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;

const MenuText = styled.div`
  ${({ theme }) => theme.font.heading[100]};
  color: ${({ theme }) => theme.color.gray[800]};
  cursor: pointer;
  white-space: nowrap;
`;

const S = {
  Container,
  InfoSection,
  LogoImg,
  LabelContainer,
  MenuSection,
  MenuText,
};

export default S;
