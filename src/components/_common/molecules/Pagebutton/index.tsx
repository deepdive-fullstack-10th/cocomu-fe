import { useState } from 'react';
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronLeft, BsChevronRight, BsThreeDots } from 'react-icons/bs';
import Stepper from '@components/_common/atoms/Stepper';
import S from './style';

interface PageButtonsProps {
  pages: number[];
}

export default function PageButton({ pages }: PageButtonsProps) {
  const [selectPage, setSelectPage] = useState<number>(pages[0]);

  const getPageNumbers = () => {
    const maxPagesToShow = 5;
    const currentIndex = pages.indexOf(selectPage);
    let start = Math.max(currentIndex - 2, 0);
    const end = Math.min(start + maxPagesToShow, pages.length);

    if (end - start < maxPagesToShow) {
      start = Math.max(end - maxPagesToShow, 0);
    }

    return pages.slice(start, end);
  };

  const pageNumbers = getPageNumbers();

  const handleClick = (action: string) => {
    switch (action) {
      case 'first':
        setSelectPage(pages[0]);
        break;
      case 'prev':
        setSelectPage((prev) => Math.max(prev - 1, pages[0]));
        break;
      case 'next':
        setSelectPage((prev) => Math.min(prev + 1, pages[pages.length - 1]));
        break;
      case 'last':
        setSelectPage(pages[pages.length - 1]);
        break;
      default:
        break;
    }
  };

  return (
    <S.PageButtonsContainer>
      <S.Item>
        <BsChevronDoubleLeft onClick={() => handleClick('first')} />
      </S.Item>

      <S.Item>
        <BsChevronLeft onClick={() => handleClick('prev')} />
      </S.Item>

      {selectPage > pages[pages.length - 4] && (
        <>
          <Stepper
            select={selectPage === pages[0]}
            onClick={() => setSelectPage(pages[0])}
          >
            {pages[0]}
          </Stepper>
          <S.Item>
            <BsThreeDots />
          </S.Item>
        </>
      )}

      {pageNumbers.map((pageNumber) => (
        <Stepper
          key={pageNumber}
          select={pageNumber === selectPage}
          onClick={() => setSelectPage(pageNumber)}
        >
          {pageNumber}
        </Stepper>
      ))}

      {selectPage < pages[pages.length - 3] && (
        <>
          <S.Item>
            <BsThreeDots />
          </S.Item>
          <Stepper
            select={selectPage === pages[pages.length - 1]}
            onClick={() => setSelectPage(pages[pages.length - 1])}
          >
            {pages[pages.length - 1]}
          </Stepper>
        </>
      )}

      <S.Item>
        <BsChevronRight onClick={() => handleClick('next')} />
      </S.Item>

      <S.Item>
        <BsChevronDoubleRight onClick={() => handleClick('last')} />
      </S.Item>
    </S.PageButtonsContainer>
  );
}
