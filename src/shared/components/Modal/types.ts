import { ReactNode } from 'react';

export interface ModalProps {
  open: boolean;
  title: string;
  content: ReactNode;
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  onCancel: () => void;
  isDeleting?: boolean;
}
