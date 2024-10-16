import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@app/store';
import { selectCurrentFilter } from '@features/filter-tasks/model/selectors';
import { TaskFilter } from '@shared/types';
import { Task } from '../types';

export const selectTasks = (state: RootState): Task[] => state.tasks.items;

export const selectFilteredTasks = createSelector(
  [selectTasks, selectCurrentFilter],
  (tasks, filter) => {
    switch (filter) {
      case TaskFilter.Completed:
        return tasks.filter((task) => task.completed);
      case TaskFilter.Favorite:
        return tasks.filter((task) => task.isFavorite);
      case TaskFilter.Active:
        return tasks.filter((task) => !task.completed);
      case TaskFilter.All:
      default:
        return tasks;
    }
  }
);
