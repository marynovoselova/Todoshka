import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '@shared/components';
import { DeleteTaskModalProps } from '../types';

const DeleteTaskModal: FC<DeleteTaskModalProps> = ({ open, taskTitle, onConfirm, onCancel }) => {
  const { t } = useTranslation();

  return (
    <Modal
      open={open}
      title=""
      content={`${t('confirm_delete')} "${taskTitle}"?`}
      confirmText={t('delete')}
      cancelText={t('cancel')}
      onConfirm={onConfirm}
      onCancel={onCancel}
      isDeleting
    />
  );
};

export default memo(DeleteTaskModal);
