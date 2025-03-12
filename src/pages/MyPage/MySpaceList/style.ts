import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  margin-top: 3rem;
`;

const SpaceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  min-height: 70rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
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
  SpaceList,
  Sentinel,
};

export default S;
