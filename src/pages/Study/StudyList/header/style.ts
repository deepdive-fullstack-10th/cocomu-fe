import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8.5rem 0rem 4rem 0rem;
  position: relative;
  z-index: 10;
`;

export const DropdownWrapper = styled.div`
  display: flex;
  gap: 2rem;

  & > * {
    width: 14rem;
    height: 3.6rem;
    position: relative;
    z-index: 10;
    background-color: white;
  }

  .dropdown-menu {
    background-color: white !important;
    z-index: 15;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding-left: 2rem;
  width: 256px;
  height: 36px;
`;
