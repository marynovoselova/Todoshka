import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskFilter } from '@shared/types';
import { FilterState } from '../types';

const initialState: FilterState = {
  currentFilter: TaskFilter.All,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<TaskFilter>) {
      state.currentFilter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
