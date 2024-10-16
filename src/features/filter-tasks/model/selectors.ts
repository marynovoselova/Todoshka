import { RootState } from '@app/store';

export const selectCurrentFilter = (state: RootState) => state.filter.currentFilter;
