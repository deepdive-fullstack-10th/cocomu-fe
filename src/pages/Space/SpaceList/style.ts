import styled from '@emotion/styled';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3rem 12rem 0 12rem;
`;

const StudyTitle = styled.div`
  display: flex;
  white-space: nowrap;
  width: 20%;
  padding: 1rem;

  color: ${({ theme }) => theme.color.gray[950]};
  ${({ theme }) => theme.font.heading[600]};
`;

const CreateButtonContainer = styled.div`
  width: 20%;
  padding: 1rem;
`;

const TabMenuContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const FilteredContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const ClickFilteredContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const SearchFilteredContainer = styled.div`
  display: flex;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`;

const SpaceListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 70rem;

  margin-top: 4rem;
  gap: 2rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const S = {
  HeaderContainer,
  StudyTitle,
  CreateButtonContainer,
  TabMenuContainer,
  BodyContainer,
  FilteredContainer,
  ClickFilteredContainer,
  SearchFilteredContainer,
  SpaceListContainer,
};

export default S;
