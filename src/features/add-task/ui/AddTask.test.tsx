import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@mocks/react-i18next';
import { useTasks } from '@entities/task';
import { AddTask } from '@features/add-task';
import { renderWithProviders } from '@shared/utils';

jest.mock('@entities/task', () => ({
  useTasks: jest.fn(() => ({
    tasks: [],
    completedTasksCount: 0,
    addTask: jest.fn(),
    editTask: jest.fn(),
    deleteTask: jest.fn(),
    toggleCompletion: jest.fn(),
    toggleFavorite: jest.fn(),
    clearCompleted: jest.fn(),
  })),
}));

describe('AddTask', () => {
  let input: HTMLInputElement;
  const mockAddTask = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useTasks as jest.Mock).mockReturnValue({
      tasks: [],
      completedTasksCount: 0,
      addTask: mockAddTask,
      editTask: jest.fn(),
      deleteTask: jest.fn(),
      toggleCompletion: jest.fn(),
      toggleFavorite: jest.fn(),
      clearCompleted: jest.fn(),
    });

    renderWithProviders(<AddTask />);
    input = screen.getByLabelText('What needs to be done') as HTMLInputElement;
  });

  const submitTask = (taskTitle: string, submitAction: () => void) => {
    fireEvent.change(input, { target: { value: taskTitle } });
    submitAction();

    expect(mockAddTask).toHaveBeenCalledWith(taskTitle);
    expect(input.value).toBe('');
  };

  it('should render AddTask component', () => {
    expect(screen.getByLabelText('Hint for creating tasks')).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it('should handle input change', () => {
    fireEvent.change(input, {
      target: { value: 'New Task' },
    });

    expect(input.value).toBe('New Task');
  });

  it('should call addTask with input value on button click', () => {
    submitTask('New Task', () => fireEvent.click(screen.getByText('Add')));
  });

  it('should call addTask with input value on enter key press', () => {
    submitTask('New Task', () =>
      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 })
    );
  });

  it('should not call addTask with empty input', () => {
    fireEvent.click(screen.getByText('Add'));

    expect(mockAddTask).not.toHaveBeenCalled();
  });
});
