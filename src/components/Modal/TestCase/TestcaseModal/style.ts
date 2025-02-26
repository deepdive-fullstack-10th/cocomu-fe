import styled from '@emotion/styled';

const Container = styled.div`
  padding: 1.4rem 2.2rem 3rem 2.2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Description = styled.p`
  ${({ theme }) => theme.font.common.defaultAccent};
  color: ${({ theme }) => theme.color.gray[900]};
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;

  max-height: 16rem;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.6rem;

  margin-top: 2.1rem;
`;

const S = {
  Container,
  Header,
  Body,
  Description,
  ItemWrapper,
  Footer,
};

export default S;
