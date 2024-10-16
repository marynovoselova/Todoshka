export interface EditTaskModalProps {
  open: boolean;
  taskTitle: string;
  onSave: (newTitle: string) => void;
  onClose: () => void;
}
