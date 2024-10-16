export interface DeleteAllCompletedModalProps {
  open: boolean;
  completedTasksCount: number;
  onConfirm: () => void;
  onCancel: () => void;
}
