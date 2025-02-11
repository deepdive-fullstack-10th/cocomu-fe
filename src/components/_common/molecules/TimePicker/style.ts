import styled from '@emotion/styled';

const PickerContainer = styled.div`
  display: flex;
  align-items: center;

  width: fit-content;
  min-width: 15rem;

  background-color: ${({ theme }) => theme.color.gray[50]};
  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 0.8rem;

  padding: 1.5rem 1rem;

  user-select: none;
`;

const Colon = styled.div`
  ${({ theme }) => theme.font.heading[200]};

  margin-top: 2.4rem;
`;

const S = { PickerContainer, Colon };

export default S;
