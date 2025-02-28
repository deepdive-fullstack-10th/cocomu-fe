import styled from '@emotion/styled';
import Pagination from '@mui/material/Pagination';

export const StyledPagination = styled(Pagination)`
  user-select: none;

  & .MuiPaginationItem-root {
    typography: common.small;
  }
`;
