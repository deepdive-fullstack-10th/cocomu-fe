import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

const selectedItemStyles = (theme: Theme) => css`
  ${theme.font.common.defaultAccent};
  color: ${theme.color.gray[950]};
  border-top: 1px solid ${theme.color.gray[950]};
  border-bottom: 1px solid ${theme.color.gray[950]};
`;

export const PickerContainer = styled.div`
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

export const Column = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const SwipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  overflow: hidden;
`;

export const Item = styled.div<{ selected: boolean }>`
  ${({ theme }) => theme.font.common.smallAccent};
  color: ${({ theme }) => theme.color.gray[500]};
  ${({ selected, theme }) => selected && selectedItemStyles(theme)}
  padding: 0.3rem 0;
  transition: all 0.2s ease;
  cursor: pointer;
`;

export const Label = styled.div`
  ${({ theme }) => theme.font.common.default};
  color: ${({ theme }) => theme.color.gray[900]};
`;

export const Colon = styled.div`
  ${({ theme }) => theme.font.heading[200]};
  margin-top: 2.4rem;
`;

const S = { PickerContainer, Column, SwipeWrapper, Item, Label, Colon };
export default S;
