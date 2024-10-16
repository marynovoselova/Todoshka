import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '@shared/utils';
import '@mocks/react-i18next';
import Modal from './Modal';

const modalProps = {
  open: true,
  title: 'Modal Title',
  content: 'Modal Content',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  onConfirm: jest.fn(),
  onCancel: jest.fn(),
  isDeleting: false,
};

describe('Modal', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render Modal with correct title, content and buttons', () => {
    renderWithProviders(<Modal {...modalProps} />);
    const confirmButton = screen.getByText('Confirm') as HTMLButtonElement;
    const cancelButton = screen.getByText('Cancel') as HTMLButtonElement;

    expect(screen.getByText(modalProps.title)).toBeInTheDocument();
    expect(screen.getByText(modalProps.content)).toBeInTheDocument();
    expect(confirmButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it('should call onConfirm when confirm button is clicked', () => {
    renderWithProviders(<Modal {...modalProps} />);
    const confirmButton = screen.getByText('Confirm') as HTMLButtonElement;

    fireEvent.click(confirmButton);

    expect(modalProps.onConfirm).toHaveBeenCalledTimes(1);
  });

  it('should call onCancel when cancel button is clicked', () => {
    renderWithProviders(<Modal {...modalProps} />);
    const cancelButton = screen.getByText('Cancel') as HTMLButtonElement;

    fireEvent.click(cancelButton);

    expect(modalProps.onCancel).toHaveBeenCalledTimes(1);
  });

  it('should apply correct styles when isDeleting is false', () => {
    renderWithProviders(<Modal {...modalProps} />);
    const confirmButton = screen.getByText('Confirm') as HTMLButtonElement;

    expect(confirmButton).toHaveClass('confirmButton');
  });

  it('should apply correct styles when isDeleting is true', () => {
    renderWithProviders(<Modal {...modalProps} isDeleting />);
    const confirmButton = screen.getByText('Confirm') as HTMLButtonElement;

    expect(confirmButton).toHaveClass('deleteButton');
  });
});
