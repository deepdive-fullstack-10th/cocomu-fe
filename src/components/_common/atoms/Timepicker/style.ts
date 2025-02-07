import styled from '@emotion/styled';
import { theme } from '@styles/theme';

type itemProps = {
  selected: boolean;
};

export const PickerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.color.gray[950]};
  padding: 1rem;
  width: fit-content;
  min-width: 15rem;
  background-color: ${theme.color.gray[50]};
  border-radius: 8px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const SwipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 11rem;
  overflow: hidden;
`;

export const Item = styled.div<itemProps>`
  padding: 0.3rem 0rem;
  font: ${({ selected }) => (selected ? theme.font.heading[400] : theme.font.heading[100])};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  color: ${({ selected }) => (selected ? theme.color.gray[950] : theme.color.gray[500])};
  border-bottom: ${({ selected }) => (selected ? `1px solid ${theme.color.gray[950]}` : 'none')};
  border-top: ${({ selected }) => (selected ? `1px solid ${theme.color.gray[950]}` : 'none')};
  transition: all 0.2s ease;
  cursor: pointer;
`;

export const Label = styled.div`
  color: ${theme.color.gray[900]};
  ${theme.font.heading[300]}
`;

export const Colon = styled.div`
  ${theme.font.heading[400]}
  font-weight: bold;
  margin: 1rem 1rem;
  margin-top: 3.4rem;
`;

const S = { PickerContainer, Column, SwipeWrapper, Item, Label, Colon };
export default S;
