import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { render, fireEvent, screen } from '@testing-library/react';
import { TaskFilter } from '@shared/types';
import { setFilter } from '../model/filterSlice';
import useFilter from './useFilter';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const mockDispatch = jest.fn();
(useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);

const mockUseSelector = useSelector as jest.MockedFunction<typeof useSelector>;

describe('useFilter', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderFilterComponent = (filter: TaskFilter) => {
    const FilterComponent = () => {
      const { currentFilter, changeFilter } = useFilter();

      return (
        <div>
          <span data-testid="currentFilter">Current Filter: {currentFilter}</span>
          <button type="button" onClick={() => changeFilter(TaskFilter.All)}>
            All
          </button>
          <button type="button" onClick={() => changeFilter(TaskFilter.Active)}>
            Active
          </button>
          <button type="button" onClick={() => changeFilter(TaskFilter.Favorite)}>
            Favorite
          </button>
          <button type="button" onClick={() => changeFilter(TaskFilter.Completed)}>
            Completed
          </button>
        </div>
      );
    };

    mockUseSelector.mockReturnValue(filter);

    render(<FilterComponent />);
  };

  it('should return the current filter', () => {
    renderFilterComponent(TaskFilter.All);

    expect(screen.getByTestId('currentFilter').textContent).toBe('Current Filter: all');
  });

  it('should dispatch setFilter action when changeFilter is called', () => {
    renderFilterComponent(TaskFilter.All);

    fireEvent.click(screen.getByText('Completed'));

    expect(mockDispatch).toHaveBeenCalledWith(setFilter(TaskFilter.Completed));
  });

  it('should switch between filters correctly', () => {
    renderFilterComponent(TaskFilter.Active);

    fireEvent.click(screen.getByText('Favorite'));
    expect(mockDispatch).toHaveBeenCalledWith(setFilter(TaskFilter.Favorite));

    fireEvent.click(screen.getByText('Completed'));
    expect(mockDispatch).toHaveBeenCalledWith(setFilter(TaskFilter.Completed));

    fireEvent.click(screen.getByText('Active'));
    expect(mockDispatch).toHaveBeenCalledWith(setFilter(TaskFilter.Active));

    fireEvent.click(screen.getByText('All'));
    expect(mockDispatch).toHaveBeenCalledWith(setFilter(TaskFilter.All));
  });
});
