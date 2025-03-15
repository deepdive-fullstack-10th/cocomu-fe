import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@styles/theme';

interface CardContainerProps {
  isEven: boolean;
}

interface StatusProps {
  status: '등록' | '대기' | '해결';
}

const cardContainerStyles = ({ isEven }: CardContainerProps) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.3rem 9rem 1.3rem 1.7rem;
  width: 100%;
  background-color: ${isEven ? theme.color.gray[200] : theme.color.gray[50]};
`;

const statusStyles = ({ status }: StatusProps) => css`
  ${theme.font.heading[100]};
  color: ${status === '등록'
    ? theme.color.primary[800]
    : status === '대기'
      ? theme.color.secondary[800]
      : theme.color.triadic[800]};
`;

const CardContainer = styled.div<CardContainerProps>(cardContainerStyles);

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16.5rem;
`;

const Title = styled.div`
  ${theme.font.heading[100]};
  color: ${theme.color.gray[900]};
`;

const Number = styled.div`
  ${theme.font.heading[100]};
  color: ${theme.color.gray[900]};
`;

const Date = styled.div`
  ${theme.font.heading[100]};
  color: ${theme.color.gray[900]};
`;

const Status = styled.div<StatusProps>(statusStyles);

const S = {
  CardContainer,
  InfoWrapper,
  Title,
  Number,
  Date,
  Status,
};

export default S;
