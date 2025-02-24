import Pagination from '@mui/material/Pagination';

interface PageButtonsProps {
  pages: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export default function PageButton({ pages, onPageChange }: PageButtonsProps) {
  return (
    <Pagination
      count={pages}
      color='primary'
      size='small'
      onChange={onPageChange}
      sx={{
        '& .MuiPaginationItem-root': {
          typography: 'common.small',
        },
      }}
    />
  );
}
