import Waiting from '@components/Modal/Waiting';

export interface WaitingProps extends Record<string, unknown> {
  label?: string;
  description?: string;
  navigateUrl?: string;
  onClose?: () => void;
}

interface ModalConfig<T> {
  Component: React.FC<T>;
  disableOutsideClick?: boolean;
}

export const MODAL_COMPONENTS: {
  waiting: ModalConfig<WaitingProps>;
} = {
  waiting: { Component: Waiting, disableOutsideClick: true },
};
