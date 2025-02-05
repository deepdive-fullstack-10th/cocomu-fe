import { useEffect, useState } from 'react';
import S from './style';

type ToastItem = {
  id: string;
  content: string;
  isVisible: boolean;
};

type ToastContainerProps = {
  message: string;
};

export default function ToastContainer({ message }: ToastContainerProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    if (!message) return;

    const newToast: ToastItem = {
      id: `${Date.now()}-${Math.random()}`,
      content: message,
      isVisible: true,
    };

    setToasts((prev) => [newToast, ...prev].slice(0, 5));

    setTimeout(() => {
      setToasts((prev) => prev.map((toast) => (toast.id === newToast.id ? { ...toast, isVisible: false } : toast)));
    }, 4500);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== newToast.id));
    }, 5000);
  }, [message]);

  return (
    <S.Container>
      <S.ToastWrapper>
        {toasts.map(({ id, content, isVisible }) => (
          <S.Toast
            key={id}
            className={isVisible ? 'show' : ''}
          >
            <div>
              <S.CloseBtn
                type='button'
                onClick={() => setToasts((prev) => prev.filter((toast) => toast.id !== id))}
              >
                ×
              </S.CloseBtn>
            </div>
            <S.ToastContent>{content}</S.ToastContent>
            <S.ProgressBar> </S.ProgressBar>
          </S.Toast>
        ))}
      </S.ToastWrapper>
    </S.Container>
  );
}
