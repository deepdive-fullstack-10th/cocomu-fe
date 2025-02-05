import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const progressShrink = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ToastWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Toast = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 8px;
  max-width: 400px;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateX(100%);
  transition:
    transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out;

  &.show {
    animation: ${slideIn} 0.5s forwards;
  }

  &:not(.show) {
    animation: ${slideOut} 0.5s forwards;
  }
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 2.5rem;
  cursor: pointer;
  float: right;
  padding-top: 5px;
  padding-right: 10px;
  color: gray;
  &:hover {
    color: black;
  }
`;

const ProgressBar = styled.div`
  height: 5px;
  background-color: #ff6b6b;
  width: 100%;
  border-radius: 4px;
  margin-top: 18px;
  animation: ${progressShrink} 4.5s linear forwards;
`;

const ToastContent = styled.div`
  margin: 0px 10px;
  font-size: 1.5rem;
`;
const S = {
  Container,
  ToastWrapper,
  Toast,
  CloseBtn,
  ProgressBar,
  ToastContent,
};

export default S;
