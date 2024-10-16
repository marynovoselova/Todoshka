import React from 'react';
import { useSelector } from 'react-redux';
import { screen } from '@testing-library/react';
import { renderWithSuspense } from '@shared/utils';
import '@mocks/react-i18next';
import TaskList from './TaskList';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockUseSelector = useSelector as jest.MockedFunction<typeof useSelector>;

describe('TaskList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render list of tasks', async () => {
    const tasks = [
      { id: '1', title: 'Task 1', completed: false, isFavorite: false },
      { id: '2', title: 'Task 2', completed: true, isFavorite: true },
    ];

    mockUseSelector.mockReturnValue(tasks);
    await renderWithSuspense(<TaskList />);

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  it('should render message when no tasks available', async () => {
    mockUseSelector.mockReturnValue([]);
    await renderWithSuspense(<TaskList />);

    expect(screen.getByText('No tasks available')).toBeInTheDocument();
  });
});
