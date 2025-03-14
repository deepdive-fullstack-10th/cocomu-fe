import { formatDate } from '@utils/formatDate';
import S from './style';

interface InquiryCardProps {
  id: number;
  title: string;
  createdAt: string;
  status: '등록' | '대기' | '해결';
  index: number;
}

export default function InquiryCard({ id, title, createdAt, status, index }: InquiryCardProps) {
  return (
    <S.CardContainer isEven={index % 2 === 1}>
      <S.Title>{title}</S.Title>
      <S.InfoWrapper>
        <S.Number>{id}</S.Number>
        <S.Date>{formatDate(createdAt)}</S.Date>
        <S.Status status={status}>{status}</S.Status>
      </S.InfoWrapper>
    </S.CardContainer>
  );
}
