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
    const buffer = 3;
    const currentIndex = pages.indexOf(selectPage);
    let start = Math.max(currentIndex - buffer, 0);
    let end = Math.min(currentIndex + buffer + 1, pages.length);

    const missingLeft = Math.max(0, buffer - currentIndex);
    const missingRight = Math.max(0, buffer - (pages.length - currentIndex - 1));

    start = Math.max(start - missingRight, 0);
    end = Math.min(end + missingLeft, pages.length);

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

  const halfIndex = Math.floor(pages.length / 2);
  const showRightEllipsis = selectPage <= pages[halfIndex - 1];
  const showLeftEllipsis = selectPage > pages[halfIndex - 1];

  return (
    <S.PageButtonsContainer>
      <S.Item>
        <BsChevronDoubleLeft onClick={() => handleClick('first')} />
      </S.Item>

      <S.Item>
        <BsChevronLeft onClick={() => handleClick('prev')} />
      </S.Item>

      {showLeftEllipsis && (
        <>
          <S.Item>
            <Stepper
              select={selectPage === pages[0]}
              onClick={() => setSelectPage(pages[0])}
            >
              {pages[0]}
            </Stepper>
          </S.Item>
          <S.Item>
            <BsThreeDots />
          </S.Item>
        </>
      )}

      {pageNumbers.map((pageNumber) => (
        <S.Item key={pageNumber}>
          <Stepper
            select={pageNumber === selectPage}
            onClick={() => setSelectPage(pageNumber)}
          >
            {pageNumber}
          </Stepper>
        </S.Item>
      ))}

      {showRightEllipsis && (
        <>
          <S.Item>
            <BsThreeDots />
          </S.Item>
          <S.Item>
            <Stepper
              select={selectPage === pages[pages.length - 1]}
              onClick={() => setSelectPage(pages[pages.length - 1])}
            >
              {pages[pages.length - 1]}
            </Stepper>
          </S.Item>
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
