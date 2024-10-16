import { FC, Suspense, lazy, memo, useState, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import { Icon } from '@shared/components/Icon';
import { useTasks } from '@entities/task';
import { TaskItemProps } from '../../types';

const DeleteTaskModal = lazy(() => import('@features/delete-task/ui/DeleteTaskModal'));
const EditTaskModal = lazy(() => import('@features/edit-task/ui/EditTaskModal'));

const TaskItem: FC<TaskItemProps> = ({ task }) => {
  const { t } = useTranslation();
  const { toggleCompletion, toggleFavorite, editTask, deleteTask } = useTasks();
  const { id, title, completed, isFavorite } = task;

  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const favoriteAriaLabel = isFavorite ? t('remove_from_favorites') : t('mark_as_favorite');
  const favoriteIconName = useMemo(
    () => (isFavorite ? 'FavoriteActive' : 'Favorite'),
    [isFavorite]
  );

  const handleToggleCompletion = useCallback(() => {
    toggleCompletion(id);
  }, [toggleCompletion, id]);

  const handleToggleFavorite = useCallback(() => {
    toggleFavorite(id);
  }, [toggleFavorite, id]);

  const handleEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleSaveEdit = useCallback(
    (newTitle: string) => {
      if (newTitle.trim()) {
        editTask(id, newTitle);
        setIsEditing(false);
      }
    },
    [editTask, id]
  );

  const handleCloseEditModal = useCallback(() => {
    setIsEditing(false);
  }, []);

  const handleDelete = useCallback(() => {
    setIsDeleting(true);
  }, []);

  const handleConfirmDelete = useCallback(() => {
    deleteTask(id);
    setIsDeleting(false);
  }, [deleteTask, id]);

  const handleCloseDeleteModal = useCallback(() => {
    setIsDeleting(false);
  }, []);

  return (
    <ListItem sx={{ padding: 0 }}>
      <Checkbox
        edge="start"
        checked={completed}
        onChange={handleToggleCompletion}
        inputProps={{ 'aria-label': t('toggle_task_completion') }}
      />
      <ListItemText
        primary={title}
        sx={{
          textDecoration: completed ? 'line-through' : 'none',
          wordBreak: 'break-word',
        }}
      />
      <IconButton edge="end" onClick={handleToggleFavorite} aria-label={favoriteAriaLabel}>
        <Icon iconName={favoriteIconName} />
      </IconButton>
      <IconButton edge="end" onClick={handleEdit} aria-label={t('edit_task')}>
        <Icon iconName="Pen" />
      </IconButton>
      <IconButton edge="end" onClick={handleDelete} aria-label={t('delete_task')}>
        <Icon iconName="Delete" />
      </IconButton>
      <Suspense>
        <EditTaskModal
          open={isEditing}
          taskTitle={title}
          onSave={handleSaveEdit}
          onClose={handleCloseEditModal}
        />
        <DeleteTaskModal
          open={isDeleting}
          taskTitle={title}
          onConfirm={handleConfirmDelete}
          onCancel={handleCloseDeleteModal}
        />
      </Suspense>
    </ListItem>
  );
};

export default memo(TaskItem);
