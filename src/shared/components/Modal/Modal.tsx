import { FC, memo } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import { ModalProps } from './types';
import styles from './Modal.module.scss';

const Modal: FC<ModalProps> = ({
  open,
  title,
  content,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  isDeleting,
}) => {
  return (
    <Dialog open={open} onClose={onCancel} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button
          className={isDeleting ? '' : styles.cancelButton}
          onClick={onCancel}
          color="primary"
        >
          {cancelText}
        </Button>
        <Button
          className={isDeleting ? styles.deleteButton : styles.confirmButton}
          onClick={onConfirm}
          color="primary"
          variant="contained"
        >
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(Modal);
