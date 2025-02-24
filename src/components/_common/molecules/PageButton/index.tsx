import { StyledPagination } from './style';

interface PageButtonsProps {
  pages: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export default function PageButton({ pages, onPageChange }: PageButtonsProps) {
  return (
    <StyledPagination
      count={pages}
      color='primary'
      size='small'
      onChange={onPageChange}
    />
  );
}
