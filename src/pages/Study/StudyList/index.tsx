import { useState } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import * as S from './style';

export default function StudyList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [status, setStatus] = useState<string | undefined>(undefined);
  const [languages, setLanguages] = useState<string[]>([]);
  const [judges, setJudges] = useState<string[]>([]);
  const [joinable, setJoinable] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');

  const itemsPerPage = 8;

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <S.Container>
      <Header
        onStatusChange={setStatus}
        onLanguagesChange={setLanguages}
        onJudgesChange={setJudges}
        onJoinableChange={setJoinable}
        onKeywordChange={setKeyword}
      />
      <Body
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        status={status}
        languages={languages}
        judges={judges}
        joinable={joinable}
        keyword={keyword}
        onTotalItemsChange={setTotalItems}
      />
      <Footer
        pages={Math.ceil(totalItems / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </S.Container>
  );
}
