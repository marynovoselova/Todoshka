import { FC, memo, useState, useCallback, ChangeEvent, KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField, Button, Box } from '@mui/material';
import { useTasks } from '@entities/task';
import { Hint } from '@shared/components';
import styles from './AddTask.module.scss';

const AddTask: FC = () => {
  const { t } = useTranslation();
  const [taskTitle, setTaskTitle] = useState('');
  const { addTask } = useTasks();

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  }, []);

  const handleAddTask = useCallback(() => {
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle('');
    }
  }, [taskTitle, addTask]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTask();
    }
  };

  return (
    <Box className={styles.box} mb={2}>
      <Hint label={t('hint_for_creating_tasks')} text={t('task_creation_hint')} />
      <TextField
        label={t('what_needs_to_be_done')}
        variant="standard"
        value={taskTitle}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        fullWidth
        sx={{
          marginRight: '8px',
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: 'primary.main',
          },
        }}
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        {t('add')}
      </Button>
    </Box>
  );
};

export default memo(AddTask);
