import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredTasks } from '@entities/task/model/selectors';
import {
  addNewTask,
  editTaskTitle,
  removeTask,
  toggleTaskFavorite,
  toggleTaskCompletion,
  clearCompletedTasks,
} from '../model/tasksSlice';

export const useTasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectFilteredTasks);
  const completedTasksCount = tasks.filter((task) => task.completed).length;

  const addTask = useCallback(
    (title: string) => {
      dispatch(addNewTask(title));
    },
    [dispatch]
  );

  const editTask = useCallback(
    (id: string, title: string) => {
      dispatch(editTaskTitle({ id, title }));
    },
    [dispatch]
  );

  const deleteTask = useCallback(
    (id: string) => {
      dispatch(removeTask(id));
    },
    [dispatch]
  );

  const toggleCompletion = useCallback(
    (id: string) => {
      dispatch(toggleTaskCompletion(id));
    },
    [dispatch]
  );

  const toggleFavorite = useCallback(
    (id: string) => {
      dispatch(toggleTaskFavorite(id));
    },
    [dispatch]
  );

  const clearCompleted = useCallback(() => {
    dispatch(clearCompletedTasks());
  }, [dispatch]);

  return {
    tasks,
    completedTasksCount,
    addTask,
    editTask,
    deleteTask,
    toggleCompletion,
    toggleFavorite,
    clearCompleted,
  };
};
