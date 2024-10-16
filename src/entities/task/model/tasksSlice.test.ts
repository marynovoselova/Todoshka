import tasksReducer, {
  addNewTask,
  editTaskTitle,
  toggleTaskCompletion,
  toggleTaskFavorite,
  clearCompletedTasks,
  removeTask,
} from './tasksSlice';
import { TasksState } from '../types';

describe('TasksSlice', () => {
  const initialState: TasksState = {
    items: [],
  };

  it('should return the initial state when no action is provided', () => {
    expect(tasksReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should add a new task', () => {
    const action = addNewTask('New task');
    const state = tasksReducer(initialState, action);

    expect(state.items).toHaveLength(1);
    expect(state.items[0].title).toBe('New task');
    expect(state.items[0].completed).toBe(false);
    expect(state.items[0].isFavorite).toBe(false);
  });

  it('should edit task title', () => {
    const initialStateWithTask: TasksState = {
      items: [
        {
          id: '1',
          title: 'Old title',
          completed: false,
          isFavorite: false,
        },
      ],
    };

    const action = editTaskTitle({ id: '1', title: 'New title' });
    const state = tasksReducer(initialStateWithTask, action);

    expect(state.items[0].title).toBe('New title');
  });

  it('should toggle task completion', () => {
    const initialStateWithTask: TasksState = {
      items: [
        {
          id: '1',
          title: 'Test task',
          completed: false,
          isFavorite: false,
        },
      ],
    };

    const action = toggleTaskCompletion('1');
    const state = tasksReducer(initialStateWithTask, action);

    expect(state.items[0].completed).toBe(true);
  });

  it('should toggle task favorite', () => {
    const initialStateWithTask: TasksState = {
      items: [
        {
          id: '1',
          title: 'Test task',
          completed: false,
          isFavorite: false,
        },
      ],
    };

    const action = toggleTaskFavorite('1');
    const state = tasksReducer(initialStateWithTask, action);

    expect(state.items[0].isFavorite).toBe(true);
  });

  it('should remove task', () => {
    const initialStateWithTask: TasksState = {
      items: [
        {
          id: '1',
          title: 'Test task',
          completed: false,
          isFavorite: false,
        },
      ],
    };

    const action = removeTask('1');
    const state = tasksReducer(initialStateWithTask, action);

    expect(state.items).toHaveLength(0);
  });

  it('should clear completed tasks', () => {
    const initialStateWithTask: TasksState = {
      items: [
        {
          id: '1',
          title: 'Task 1',
          completed: true,
          isFavorite: false,
        },
        {
          id: '2',
          title: 'Task 2',
          completed: false,
          isFavorite: false,
        },
      ],
    };
    const action = clearCompletedTasks();
    const state = tasksReducer(initialStateWithTask, action);

    expect(state.items[0].id).toBe('2');
  });
});
