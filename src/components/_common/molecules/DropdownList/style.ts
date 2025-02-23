import styled from '@emotion/styled';

const DropdownList = styled.div`
  position: absolute;
  top: 107%;
  left: 0%;

  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.color.gray[50]};
  padding: 1rem 0;
`;

const S = {
  DropdownList,
};

export default S;
