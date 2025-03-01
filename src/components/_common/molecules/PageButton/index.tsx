import { PaginationItem } from '@mui/material';
import Icon from '@components/_common/atoms/Icon';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import S from './style';

interface PageButtonsProps {
  pages: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

function PreviousButton() {
  return (
    <S.PaginationNavButton>
      <Icon
        size='sm'
        color='950'
      >
        <BsChevronLeft />
      </Icon>
      이전
    </S.PaginationNavButton>
  );
}

function NextButton() {
  return (
    <S.PaginationNavButton>
      다음
      <Icon
        size='sm'
        color='950'
      >
        <BsChevronRight />
      </Icon>
    </S.PaginationNavButton>
  );
}

export default function PageButton({ pages, onPageChange }: PageButtonsProps) {
  return (
    <S.StyledPagination
      count={pages}
      color='primary'
      size='small'
      onChange={onPageChange}
      renderItem={(item) => (
        <PaginationItem
          {...item}
          slots={{ previous: PreviousButton, next: NextButton }}
        />
      )}
    />
  );
}
