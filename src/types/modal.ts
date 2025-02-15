import Waiting from '@components/Modal/Waiting';
import Login from '@components/Modal/Login';

export interface WaitingProps extends Record<string, unknown> {
  label?: string;
  description?: string;
  navigateUrl?: string;
  onClose?: () => void;
}

export interface LoginProps extends Record<string, unknown> {
  onClose?: () => void;
  onGoogle?: () => void;
  onGitHub?: () => void;
  onKakao?: () => void;
}

interface ModalConfig<T> {
  Component: React.FC<T>;
  disableOutsideClick?: boolean;
}

export const MODAL_COMPONENTS: {
  waiting: ModalConfig<WaitingProps>;
  login: ModalConfig<LoginProps>;
} = {
  waiting: { Component: Waiting, disableOutsideClick: true },
  login: { Component: Login, disableOutsideClick: true },
};
