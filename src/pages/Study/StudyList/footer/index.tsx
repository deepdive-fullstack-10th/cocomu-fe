import PageButton from 'src/components/_common/molecules/PageButton';
import * as S from './style';

interface FooterProps {
  pages: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export default function Footer({ pages, onPageChange }: FooterProps) {
  return (
    <S.FooterContainer>
      <PageButton
        pages={pages}
        onPageChange={onPageChange}
      />
    </S.FooterContainer>
  );
}
