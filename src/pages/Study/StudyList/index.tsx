import { useState } from 'react';
import Header from './header';
import Body from './body';
import Footer from './footer';
import * as S from './style';

export default function StudyList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 8;

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <S.Container>
      <Header />
      <Body
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onTotalItemsChange={setTotalItems}
      />
      <Footer
        pages={Math.ceil(totalItems / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </S.Container>
  );
}
