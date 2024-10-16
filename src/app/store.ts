import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '@features/filter-tasks/model/filterSlice';
import tasksReducer from '@entities/task/model/tasksSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
