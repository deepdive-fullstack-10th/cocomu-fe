import { useState } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import * as S from './style';

export default function StudyList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [status, setStatus] = useState<string | undefined>(undefined);
  const [languages, setLanguages] = useState<string[]>([]);
  const [judges, setJudges] = useState<string[]>([]);
  const [joinable, setJoinable] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');

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
        status={status}
        languages={languages}
        judges={judges}
        joinable={joinable}
        keyword={keyword}
        onTotalItemsChange={(newTotalPage) => {
          if (newTotalPage !== totalPage) {
            setTotalPage(newTotalPage || 1);
          }
        }}
      />

      <Footer
        pages={totalPage}
        onPageChange={handlePageChange}
      />
    </S.Container>
  );
}
