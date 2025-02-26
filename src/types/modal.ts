import ConfirmModal from '@components/Modal/Confirm';
import Login from '@components/Modal/Login';
import PasswordInput from '@components/Modal/PasswordInput';
import TestCase from '@components/Modal/TestCase/TestcaseModal';
import Waiting from '@components/Modal/Waiting';
import { TestCaseItem, TestCaseStatusData } from './space';

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

export interface PasswordInputProps {
  studyId?: number;
  onClose?: () => void;
}

export interface LoginProps {
  onClose?: () => void;
}

export interface TestCaseProps {
  status?: TestCaseStatusData;
  onClose?: () => void;
  testCases?: TestCaseItem[];
}

interface ModalConfig<T> {
  Component: React.FC<T>;
  disableOutsideClick?: boolean;
}

export const MODAL_COMPONENTS: {
  waiting: ModalConfig<WaitingProps>;
  confirm: ModalConfig<ConfirmProps>;
  passwordInput: ModalConfig<PasswordInputProps>;
  testCase: ModalConfig<TestCaseProps>;
  login: ModalConfig<LoginProps>;
} = {
  waiting: { Component: Waiting, disableOutsideClick: true },
  confirm: { Component: ConfirmModal },
  passwordInput: { Component: PasswordInput },
  testCase: { Component: TestCase },
  login: { Component: Login },
};
