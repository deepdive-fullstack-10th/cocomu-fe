import ConfirmModal from '@components/Modal/Confirm';
import PasswordInput from '@components/Modal/PasswordInput';
import Waiting from '@components/Modal/Waiting';
import Testcase from '@components/Modal/TestCase';
import Login from '@components/Modal/Login';

interface ModalConfig<T> {
  Component: React.FC<T>;
  disableOutsideClick?: boolean;
}

export interface PasswordInputProps {
  description: string;
  onClose: () => void;
}

export interface WaitingProps extends Record<string, unknown> {
  label?: string;
  description?: string;
  navigate?: () => void;
  onClose?: () => void;
}

export interface ConfirmProps {
  description: string;
  onClose: () => void;
  onConfirm: () => boolean;
}

export type TestcaseItem = {
  id?: number | string;
  input?: string;
  output?: string;
  type?: 'BASE' | 'CUSTOM';
};

export interface TestcaseProps {
  status?: 'DEFAULT' | 'CUSTOM';
  onClose?: () => void;
  testcases?: TestcaseItem[];
}

export const MODAL_COMPONENTS: {
  waiting: ModalConfig<WaitingProps>;
  confirm: ModalConfig<ConfirmProps>;
  passwordInput: ModalConfig<PasswordInputProps>;
  testcase: ModalConfig<TestcaseProps>;
  login: ModalConfig<void>;
} = {
  waiting: { Component: Waiting, disableOutsideClick: true },
  confirm: { Component: ConfirmModal, disableOutsideClick: false },
  passwordInput: { Component: PasswordInput, disableOutsideClick: true },
  testcase: { Component: Testcase, disableOutsideClick: false },
  login: { Component: Login, disableOutsideClick: false },
};
