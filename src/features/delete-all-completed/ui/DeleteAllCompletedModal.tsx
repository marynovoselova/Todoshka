import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '@shared/components';
import { getDeclinedForm } from '@shared/lib/getDeclinedForm';
import { DeleteAllCompletedModalProps } from '../types';

const DeleteAllCompletedModal: FC<DeleteAllCompletedModalProps> = ({
  open,
  completedTasksCount,
  onConfirm,
  onCancel,
}) => {
  const { t } = useTranslation();
  const taskDeclension = useMemo(
    () =>
      getDeclinedForm(completedTasksCount, [
        t('completed_task'),
        t('completed_tasks'),
        t('completed_tasks_genitive'),
      ]),
    [completedTasksCount, t]
  );

  return (
    <Modal
      open={open}
      title={`${t('u_have')} ${completedTasksCount} ${taskDeclension}`}
      content={t('confirm_delete_completed_tasks')}
      confirmText={t('delete')}
      cancelText={t('cancel')}
      onConfirm={onConfirm}
      onCancel={onCancel}
      isDeleting
    />
  );
};

export default memo(DeleteAllCompletedModal);
