import Waiting from '@components/Modal/Waiting';

export const MODAL_COMPONENTS: Record<string, React.FC<{ onClose: () => void } & Record<string, unknown>>> = {
  waiting: Waiting,
};

export interface WaitingProps extends Record<string, unknown> {
  label?: string;
  description?: string;
  navigateUrl?: string;
  onClose?: () => void;
}
