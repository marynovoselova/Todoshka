import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { useTasks } from '@entities/task';
import { DeleteAllCompleted } from '@features/delete-all-completed';
import { renderWithSuspense } from '@shared/utils';
import '@mocks/react-i18next';

jest.mock('@entities/task/hooks/useTasks', () => ({
  useTasks: jest.fn(),
}));

const mockClearCompleted = jest.fn();
const mockUseTasks = useTasks as jest.MockedFunction<typeof useTasks>;

const setupMockUseTasks = (completedTasksCount = 3) => {
  mockUseTasks.mockReturnValue({
    tasks: [],
    completedTasksCount,
    addTask: jest.fn(),
    editTask: jest.fn(),
    deleteTask: jest.fn(),
    toggleCompletion: jest.fn(),
    toggleFavorite: jest.fn(),
    clearCompleted: mockClearCompleted,
  });
};

describe('DeleteAllCompleted', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    setupMockUseTasks();
  });

  it('should render the delete button and enable it when there are completed tasks', async () => {
    await renderWithSuspense(<DeleteAllCompleted />);

    const deleteButton = screen.getByRole('button', {
      name: 'Delete all completed tasks',
    }) as HTMLButtonElement;

    expect(deleteButton).toBeInTheDocument();
    expect(deleteButton).toBeEnabled();
  });

  it('should disable the delete button when there are not completed tasks', async () => {
    setupMockUseTasks(0);
    await renderWithSuspense(<DeleteAllCompleted />);

    const deleteButton = screen.getByRole('button', {
      name: /delete all completed tasks/i,
    }) as HTMLButtonElement;

    expect(deleteButton).toBeDisabled();
  });

  it('should open the modal when the delete button is clicked', async () => {
    await renderWithSuspense(<DeleteAllCompleted />);

    const deleteButton = screen.getByRole('button', {
      name: 'Delete all completed tasks',
    }) as HTMLButtonElement;
    fireEvent.click(deleteButton);

    expect(screen.getByText('Confirm to delete all completed tasks')).toBeInTheDocument();
  });
});
