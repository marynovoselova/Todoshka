import { useDispatch, useSelector } from 'react-redux';
import { screen, fireEvent, render } from '@testing-library/react';
import {
  addNewTask,
  editTaskTitle,
  removeTask,
  toggleTaskCompletion,
  toggleTaskFavorite,
  clearCompletedTasks,
} from '../model/tasksSlice';
import { useTasks } from './useTasks';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const mockDispatch = jest.fn();
(useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);

const mockUseSelector = useSelector as jest.MockedFunction<typeof useSelector>;

describe('useTasks', () => {
  const tasks = [
    { id: '1', title: 'Task 1', completed: false, isFavorite: false },
    { id: '2', title: 'Task 2', completed: true, isFavorite: true },
  ];

  const TestComponent = () => {
    const { addTask, editTask, deleteTask, toggleCompletion, toggleFavorite, clearCompleted } =
      useTasks();

    return (
      <>
        <button type="button" onClick={() => addTask('New Task')}>
          Add Task
        </button>
        <button type="button" onClick={() => editTask('1', 'Updated Task')}>
          Edit Task
        </button>
        <button type="button" onClick={() => deleteTask('1')}>
          Delete Task
        </button>
        <button type="button" onClick={() => toggleCompletion('1')}>
          Toggle Completion
        </button>
        <button type="button" onClick={() => toggleFavorite('1')}>
          Toggle Favorite
        </button>
        <button type="button" onClick={clearCompleted}>
          Clear Completed
        </button>
      </>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseSelector.mockReturnValue(tasks);

    render(<TestComponent />);
  });

  it('should dispatch addNewTask action when addTask is called', () => {
    fireEvent.click(screen.getByText('Add Task'));
    expect(mockDispatch).toHaveBeenCalledWith(addNewTask('New Task'));
  });

  it('should dispatch editTaskTitle action when editTask is called', () => {
    fireEvent.click(screen.getByText('Edit Task'));
    expect(mockDispatch).toHaveBeenCalledWith(editTaskTitle({ id: '1', title: 'Updated Task' }));
  });

  it('should dispatch removeTask action when deleteTask is called', () => {
    fireEvent.click(screen.getByText('Delete Task'));
    expect(mockDispatch).toHaveBeenCalledWith(removeTask('1'));
  });

  it('should dispatch toggleTaskCompletion action when toggleCompletion is called', () => {
    fireEvent.click(screen.getByText('Toggle Completion'));
    expect(mockDispatch).toHaveBeenCalledWith(toggleTaskCompletion('1'));
  });

  it('should dispatch toggleTaskFavorite action when toggleFavorite is called', () => {
    fireEvent.click(screen.getByText('Toggle Favorite'));
    expect(mockDispatch).toHaveBeenCalledWith(toggleTaskFavorite('1'));
  });

  it('should dispatch clearCompletedTasks action when clearCompleted is called', () => {
    fireEvent.click(screen.getByText('Clear Completed'));
    expect(mockDispatch).toHaveBeenCalledWith(clearCompletedTasks());
  });
});
