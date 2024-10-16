import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@mocks/react-i18next';
import { renderWithProviders } from '@shared/utils';
import DeleteAllCompletedModal from './DeleteAllCompletedModal';

const completedTasksCount = 3;
const modalProps = {
  open: true,
  completedTasksCount,
  onConfirm: jest.fn(),
  onCancel: jest.fn(),
};

describe('DeleteAllCompletedModal', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render modal with correct title, content and buttons', () => {
    renderWithProviders(<DeleteAllCompletedModal {...modalProps} />);

    const confirmButton = screen.getByText('Delete') as HTMLButtonElement;
    const cancelButton = screen.getByText('Cancel') as HTMLButtonElement;

    expect(screen.getByText(`You have ${completedTasksCount} completed tasks`)).toBeInTheDocument();
    expect(screen.getByText('Confirm to delete all completed tasks')).toBeInTheDocument();
    expect(confirmButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it('should call onConfirm when the confirm button is clicked', () => {
    renderWithProviders(<DeleteAllCompletedModal {...modalProps} />);
    const confirmButton = screen.getByText('Delete') as HTMLButtonElement;

    fireEvent.click(confirmButton);

    expect(modalProps.onConfirm).toHaveBeenCalledTimes(1);
  });

  it('should call onCancel when the cancel button is clicked', () => {
    renderWithProviders(<DeleteAllCompletedModal {...modalProps} />);
    const cancelButton = screen.getByText('Cancel') as HTMLButtonElement;

    fireEvent.click(cancelButton);

    expect(modalProps.onCancel).toHaveBeenCalledTimes(1);
  });

  it('should not render the modal when open is false', () => {
    const { queryByText } = renderWithProviders(
      <DeleteAllCompletedModal {...modalProps} open={false} />
    );

    expect(queryByText(`You have ${completedTasksCount} completed tasks`)).not.toBeInTheDocument();
    expect(queryByText('Confirm to delete all completed tasks')).not.toBeInTheDocument();
  });
});
