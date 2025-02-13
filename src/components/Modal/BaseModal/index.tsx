import { useEffect, useRef } from 'react';
import { useModalStore } from '@stores/useModalStore';
import { MODAL_COMPONENTS } from '@customTypes/modal';
import S from './style';

export default function BaseModal() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const { isOpen, modalType, modalProps, close } = useModalStore();

  useEffect(() => {
    if (!dialogRef.current) return;

    if (isOpen) {
      if (!dialogRef.current.open) dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [close]);

  if (!isOpen || !modalType) return null;

  const handleOutsideClick = (event: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    if (dialogRef.current && event.target === dialogRef.current) {
      close();
    }
  };

  const SpecificModal = MODAL_COMPONENTS[modalType];

  return (
    <S.ModalOverlay
      ref={dialogRef}
      onClick={handleOutsideClick}
    >
      {SpecificModal && (
        <SpecificModal
          {...modalProps}
          onClose={close}
        />
      )}
    </S.ModalOverlay>
  );
}
