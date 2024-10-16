import { FC, memo } from 'react';
import Box from '@mui/material/Box';
import { TaskList } from '@entities/task';
import { AddTask } from '@features/add-task';
import { TaskFilter } from '@features/filter-tasks';
import { DeleteAllCompleted } from '@features/delete-all-completed';

export const TodoPage: FC = () => {
  return (
    <Box mb={4}>
      <AddTask />
      <TaskFilter />
      <TaskList />
      <DeleteAllCompleted />
    </Box>
  );
};

export default memo(TodoPage);
