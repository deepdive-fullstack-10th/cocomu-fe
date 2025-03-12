import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  margin-top: 3rem;
`;

const StudyList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.4rem;
`;

const Sentinel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 2px;
  padding-bottom: 4rem;
`;

const S = {
  Container,
  StudyList,
  Sentinel,
};

export default S;
