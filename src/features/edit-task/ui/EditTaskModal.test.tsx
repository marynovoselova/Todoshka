import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '@shared/utils';
import '@mocks/react-i18next';
import EditTaskModal from './EditTaskModal';

const modalProps = {
  open: true,
  taskTitle: 'Initial Task Title',
  onSave: jest.fn(),
  onClose: jest.fn(),
};

describe('EditTaskModal', () => {
  const updatedTaskTitle = 'Updated Task Title';
  const { taskTitle, onClose, onSave } = modalProps;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render modal with correct title, content and buttons', () => {
    renderWithProviders(<EditTaskModal {...modalProps} />);

    const input = screen.getByDisplayValue(taskTitle) as HTMLInputElement;
    const saveButton = screen.getByText('Save') as HTMLButtonElement;
    const cancelButton = screen.getByText('Cancel') as HTMLButtonElement;

    expect(screen.getByText(`Edit task: ${taskTitle}`)).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it('should update the task title when user types in the text field', () => {
    renderWithProviders(<EditTaskModal {...modalProps} />);
    const input = screen.getByDisplayValue(taskTitle) as HTMLInputElement;

    fireEvent.change(input, { target: { value: updatedTaskTitle } });

    expect(screen.getByDisplayValue('Updated Task Title')).toBeInTheDocument();
  });

  it('should call onSave with updatedTaskTitle when save button is clicked', () => {
    renderWithProviders(<EditTaskModal {...modalProps} />);
    const input = screen.getByDisplayValue(taskTitle) as HTMLInputElement;
    const saveButton = screen.getByText('Save') as HTMLButtonElement;

    fireEvent.change(input, { target: { value: updatedTaskTitle } });
    fireEvent.click(saveButton);

    expect(onSave).toHaveBeenCalledWith(updatedTaskTitle);
  });

  it('should call onClose and reset the title when cancel button is clicked', () => {
    renderWithProviders(<EditTaskModal {...modalProps} />);
    const input = screen.getByDisplayValue(taskTitle) as HTMLInputElement;
    const cancelButton = screen.getByText('Cancel') as HTMLButtonElement;

    fireEvent.change(input, { target: { value: updatedTaskTitle } });
    fireEvent.click(cancelButton);

    expect(onClose).toHaveBeenCalledTimes(1);
    expect(screen.getByText(`Edit task: ${taskTitle}`)).toBeInTheDocument();
  });

  it('should not render the modal when open is false', () => {
    const { queryByText } = renderWithProviders(<EditTaskModal {...modalProps} open={false} />);

    expect(queryByText(`Edit task: ${taskTitle}`)).not.toBeInTheDocument();
  });
});
