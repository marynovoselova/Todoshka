import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { Task, TasksState } from '../types';

const initialState: TasksState = {
  items: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addNewTask(state, action: PayloadAction<string>) {
      const newTask: Task = {
        id: v4(),
        title: action.payload,
        completed: false,
        isFavorite: false,
      };
      state.items.push(newTask);
    },
    editTaskTitle(state, action: PayloadAction<{ id: string; title: string }>) {
      const taskToUpdate = state.items.find((task) => task.id === action.payload.id);
      if (taskToUpdate) {
        taskToUpdate.title = action.payload.title;
      }
    },
    toggleTaskCompletion(state, action: PayloadAction<string>) {
      const taskToUpdate = state.items.find((task) => task.id === action.payload);
      if (taskToUpdate) {
        taskToUpdate.completed = !taskToUpdate.completed;
      }
    },
    toggleTaskFavorite(state, action: PayloadAction<string>) {
      const taskToUpdate = state.items.find((task) => task.id === action.payload);
      if (taskToUpdate) {
        taskToUpdate.isFavorite = !taskToUpdate.isFavorite;
      }
    },
    removeTask(state, action: PayloadAction<string>) {
      state.items = state.items.filter((task) => task.id !== action.payload);
    },
    clearCompletedTasks(state) {
      state.items = state.items.filter((task) => !task.completed);
    },
  },
});

export const {
  addNewTask,
  editTaskTitle,
  toggleTaskCompletion,
  toggleTaskFavorite,
  removeTask,
  clearCompletedTasks,
} = tasksSlice.actions;
export default tasksSlice.reducer;
