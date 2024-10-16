import { FC, useState, useCallback, memo, Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import { useTasks } from '@entities/task/hooks/useTasks';
import { Tooltip } from '@mui/material';
import styles from './DeleteAllCompleted.module.scss';

const DeleteAllCompletedModal = lazy(() => import('./DeleteAllCompletedModal'));

const DeleteAllCompleted: FC = () => {
  const { t } = useTranslation();
  const { completedTasksCount, clearCompleted } = useTasks();
  const isDisabled = !completedTasksCount;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleConfirmDelete = useCallback(() => {
    clearCompleted();
    handleCloseModal();
  }, [clearCompleted, handleCloseModal]);

  return (
    <>
      <Tooltip title={isDisabled ? t('no_completed_tasks_message') : ''}>
        <span className={styles.deleteAllCompleted}>
          <Button
            disabled={isDisabled}
            variant="outlined"
            className={!isDisabled ? styles.deleteButton : ''}
            onClick={handleOpenModal}
          >
            {t('delete_all_completed_tasks')}
          </Button>
        </span>
      </Tooltip>
      <Suspense>
        <DeleteAllCompletedModal
          open={isModalOpen}
          completedTasksCount={completedTasksCount}
          onConfirm={handleConfirmDelete}
          onCancel={handleCloseModal}
        />
      </Suspense>
    </>
  );
};

export default memo(DeleteAllCompleted);
