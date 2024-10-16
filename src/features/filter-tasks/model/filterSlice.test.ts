import { TaskFilter } from '@shared/types';
import filterReducer, { setFilter } from './filterSlice';
import { FilterState } from '../types';

describe('filterSlice', () => {
  const initialState: FilterState = {
    currentFilter: TaskFilter.All,
  };

  it('should return the initial state', () => {
    const state = filterReducer(undefined, { type: '' });

    expect(state).toEqual(initialState);
  });

  it('should change the filter', () => {
    const action = setFilter(TaskFilter.Active);
    const state = filterReducer(initialState, action);

    expect(state.currentFilter).toBe(TaskFilter.Active);
  });
});
