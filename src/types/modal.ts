import PasswordInput from '@components/Modal/PasswordInput';
import Waiting from '@components/Modal/Waiting';
import Testcase from '@components/Modal/TestCase';

export interface PasswordInputProps {
  onClose: () => void;
  onConfirm: (password: string) => void;
  error?: string;
}

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
  passwordInput: ModalConfig<PasswordInputProps>;
  testcase: ModalConfig<TestcaseProps>;
} = {
  waiting: { Component: Waiting, disableOutsideClick: true },
  passwordInput: { Component: PasswordInput, disableOutsideClick: true },
  testcase: { Component: Testcase, disableOutsideClick: false },
};
