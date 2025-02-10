import { useEffect, useState } from 'react';
import { BsX } from 'react-icons/bs';
import S from './style';

type ToastType = 'default' | 'success' | 'error';

type ToastProps = {
  message: string;
  type: ToastType;
  isLeaving: boolean;
  onClose: () => void;
};

type ToastModalProps = {
  message: string;
  type: ToastType;
};

export function Toast({ message, type, isLeaving, onClose }: ToastProps) {
  return (
    <S.ToastContainer isLeaving={isLeaving}>
      <div>
        <S.CloseBtn
          type='button'
          onClick={onClose}
        >
          <BsX />
        </S.CloseBtn>
      </div>
      <S.ToastContent type={type}>{message}</S.ToastContent>
      <S.ProgressBar type={type} />
    </S.ToastContainer>
  );
}

export default function ToastModal({ message, type }: ToastModalProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setIsLeaving(true);
    }, 5000);

    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5200);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <Toast
      message={message}
      type={type}
      isLeaving={isLeaving}
      onClose={handleClose}
    />
  );
}
