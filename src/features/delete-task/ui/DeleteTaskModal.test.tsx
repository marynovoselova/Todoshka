import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '@shared/utils';
import '@mocks/react-i18next';
import DeleteTaskModal from './DeleteTaskModal';

const modalProps = {
  open: true,
  taskTitle: 'Test Task',
  onConfirm: jest.fn(),
  onCancel: jest.fn(),
};

describe('DeleteTaskModal', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the modal with correct title and buttons', () => {
    renderWithProviders(<DeleteTaskModal {...modalProps} />);
    const confirmButton = screen.getByText('Delete') as HTMLButtonElement;
    const cancelButton = screen.getByText('Cancel') as HTMLButtonElement;

    expect(
      screen.getByText(`Confirm to delete task: "${modalProps.taskTitle}"?`)
    ).toBeInTheDocument();
    expect(confirmButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it('should call onConfirm when the confirm button is clicked', () => {
    renderWithProviders(<DeleteTaskModal {...modalProps} />);
    const confirmButton = screen.getByText('Delete') as HTMLButtonElement;
    fireEvent.click(confirmButton);

    expect(modalProps.onConfirm).toHaveBeenCalledTimes(1);
  });

  it('should call onCancel when the cancel button is clicked', () => {
    renderWithProviders(<DeleteTaskModal {...modalProps} />);
    const cancelButton = screen.getByText('Cancel') as HTMLButtonElement;
    fireEvent.click(cancelButton);

    expect(modalProps.onCancel).toHaveBeenCalledTimes(1);
  });

  it('should not render the modal when open is false', () => {
    const { queryByText } = renderWithProviders(<DeleteTaskModal {...modalProps} open={false} />);

    expect(
      queryByText(`Confirm to delete task: "${modalProps.taskTitle}"?`)
    ).not.toBeInTheDocument();
  });
});
