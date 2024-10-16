import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TaskFilter } from '@shared/types';
import { selectCurrentFilter } from '../model/selectors';
import { setFilter } from '../model/filterSlice';

const useFilter = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectCurrentFilter);

  const changeFilter = useCallback(
    (filter: TaskFilter) => {
      dispatch(setFilter(filter));
    },
    [dispatch]
  );

  return {
    currentFilter,
    changeFilter,
  };
};

export default useFilter;
