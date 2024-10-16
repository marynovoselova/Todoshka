import { FC, useState, useEffect, useCallback, memo, KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import { Modal } from '@shared/components';
import { EditTaskModalProps } from '../types';

const EditTaskModal: FC<EditTaskModalProps> = ({ open, taskTitle, onSave, onClose }) => {
  const { t } = useTranslation();
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    setNewTitle(taskTitle);
  }, [taskTitle]);

  const handleSave = useCallback(() => {
    if (newTitle.trim()) {
      onSave(newTitle);
    }
  }, [newTitle, onSave]);

  const handleCancel = useCallback(() => {
    setNewTitle(taskTitle);
    onClose();
  }, [taskTitle, onClose]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSave();
      }
    },
    [handleSave]
  );

  return (
    <Modal
      open={open}
      title={`${t('edit_task')}: ${taskTitle}`}
      content={
        <TextField
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          fullWidth
          onKeyDown={handleKeyDown}
          variant="standard"
        />
      }
      confirmText="Save"
      cancelText="Cancel"
      onConfirm={handleSave}
      onCancel={handleCancel}
    />
  );
};

export default memo(EditTaskModal);
