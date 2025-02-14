import Waiting from '@components/Modal/Waiting';
import Testcase from '@components/Modal/TestCase';

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

type TestcaseItem = {
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
  testcase: ModalConfig<TestcaseProps>;
} = {
  waiting: { Component: Waiting, disableOutsideClick: true },
  testcase: { Component: Testcase, disableOutsideClick: false },
};
