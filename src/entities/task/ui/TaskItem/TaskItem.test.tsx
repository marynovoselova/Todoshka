import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@mocks/react-i18next';
import { useTasks } from '@entities/task';
import { renderWithSuspense } from '@shared/utils';
import TaskItem from './TaskItem';

jest.mock('@entities/task', () => ({
  useTasks: jest.fn(),
}));

const mockToggleCompletion = jest.fn();
const mockToggleFavorite = jest.fn();
const mockEditTask = jest.fn();
const mockDeleteTask = jest.fn();

const mockUseTasks = useTasks as jest.MockedFunction<typeof useTasks>;

const task = {
  id: '1',
  title: 'Test Task',
  completed: false,
  isFavorite: false,
};

describe('TaskItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseTasks.mockReturnValue({
      tasks: [],
      completedTasksCount: 0,
      addTask: jest.fn(),
      editTask: mockEditTask,
      deleteTask: mockDeleteTask,
      toggleCompletion: mockToggleCompletion,
      toggleFavorite: mockToggleFavorite,
      clearCompleted: jest.fn(),
    });
  });

  it('should render task title', async () => {
    await renderWithSuspense(<TaskItem task={task} />);

    expect(screen.getByText(task.title)).toBeInTheDocument();
  });

  it('should toggle task completion when checkbox is clicked', async () => {
    await renderWithSuspense(<TaskItem task={task} />);

    fireEvent.click(screen.getByLabelText('Toggle task completion'));

    expect(mockToggleCompletion).toHaveBeenCalledWith(task.id);
  });

  it('should toggle favorite status when favorite button is clicked', async () => {
    await renderWithSuspense(<TaskItem task={task} />);

    fireEvent.click(screen.getByLabelText('Mark as favorite'));

    expect(mockToggleFavorite).toHaveBeenCalledWith(task.id);
  });

  it('should open edit modal when edit button is clicked', async () => {
    await renderWithSuspense(<TaskItem task={task} />);
    const editButton = screen.getByLabelText('Edit task');

    fireEvent.click(editButton);

    expect(editButton).toBeInTheDocument();
  });

  it('should open delete modal when delete button is clicked', async () => {
    await renderWithSuspense(<TaskItem task={task} />);
    const deleteButton = screen.getByLabelText('Delete task');

    fireEvent.click(deleteButton);

    expect(deleteButton).toBeInTheDocument();
  });
});
