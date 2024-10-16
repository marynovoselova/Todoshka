import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@shared/utils';
import { TodoPage } from './TodoPage';

jest.mock('@features/add-task', () => ({
  AddTask: () => <div>AddTask Mock</div>,
}));

jest.mock('@features/filter-tasks', () => ({
  TaskFilter: () => <div>TaskFilter Mock</div>,
}));

jest.mock('@entities/task', () => ({
  TaskList: () => <div>TaskList Mock</div>,
}));

jest.mock('@features/delete-all-completed', () => ({
  DeleteAllCompleted: () => <div>DeleteAllCompleted Mock</div>,
}));

it('should render all components correctly', () => {
  renderWithProviders(<TodoPage />);

  expect(screen.getByText('AddTask Mock')).toBeInTheDocument();
  expect(screen.getByText('TaskFilter Mock')).toBeInTheDocument();
  expect(screen.getByText('TaskList Mock')).toBeInTheDocument();
  expect(screen.getByText('DeleteAllCompleted Mock')).toBeInTheDocument();
});
