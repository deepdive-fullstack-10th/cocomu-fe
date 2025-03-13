import styled from '@emotion/styled';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  border: 2px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 2.5rem;
  padding: 1.6rem 2.4rem 3rem 2.4rem;

  width: 100%;

  cursor: pointer;
`;

const Header = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
`;

const DropdownList = styled.div`
  position: absolute;
  top: 140%;
  z-index: 1;

  background-color: ${({ theme }) => theme.color.gray[50]};
  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 0.6rem;
  padding: 0.5rem 0;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 10rem;
`;

const Text = styled.div`
  ${({ theme }) => theme.font.heading[100]};
  color: ${({ theme }) => theme.color.gray[900]};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 6.4rem;
`;

const S = {
  CardContainer,
  Header,
  HeaderRight,
  DropdownList,
  Body,
  Text,
  Info,
};

export default S;
