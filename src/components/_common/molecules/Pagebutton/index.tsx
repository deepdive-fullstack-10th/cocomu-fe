import Pagination from '@mui/material/Pagination';

interface PageButtonsProps {
  pages: number;
}

export default function PageButton({ pages }: PageButtonsProps) {
  return (
    <Pagination
      count={pages}
      color='primary'
      size='small'
      sx={{
        '& .MuiPaginationItem-root': {
          typography: 'common.small',
        },
      }}
    />
  );
}
