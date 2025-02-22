import ConfirmModal from '@components/Modal/Confirm';
import PasswordInput from '@components/Modal/PasswordInput';
import Waiting from '@components/Modal/Waiting';
import Testcase from '@components/Modal/TestCase';
import Login from '@components/Modal/Login';



export interface WaitingProps {
  label?: string;
  description?: string;
  navigate?: () => void;
  onClose?: () => void;
}

export interface ConfirmProps {
  studyId?: number;
  spaceId?: number;
  name?: string;
  onClose?: () => void;
}

export type TestcaseItem = {
  id?: number | string;
  input?: string;
  output?: string;
  type?: 'BASE' | 'CUSTOM';
};

export interface TestcaseProps {
  status?: 'DEFAULT' | 'CUSTOM';
export interface PasswordInputProps {
  studyId: number;
  onClose?: () => void;
  testcases?: TestcaseItem[];
}
interface ModalConfig<T> {
  Component: React.FC<T>;
  disableOutsideClick?: boolean;
}

export const MODAL_COMPONENTS: {
  waiting: ModalConfig<WaitingProps>;
  confirm: ModalConfig<ConfirmProps>;
  passwordInput: ModalConfig<PasswordInputProps>;
  testcase: ModalConfig<TestcaseProps>;
  login: ModalConfig<void>;
} = {
  waiting: { Component: Waiting, disableOutsideClick: true },
  testcase: { Component: Testcase, disableOutsideClick: false },
  login: { Component: Login, disableOutsideClick: false },
  confirm: { Component: ConfirmModal },
  passwordInput: { Component: PasswordInput },
};
