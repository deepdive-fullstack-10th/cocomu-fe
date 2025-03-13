import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  padding-bottom: 8rem;
`;

const StudyList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.4rem;
`;

const S = {
  Container,
  StudyList,
};

export default S;
