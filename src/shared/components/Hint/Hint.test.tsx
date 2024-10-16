import React from 'react';
import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '@shared/utils';
import Hint from './Hint';

describe('Hint', () => {
  const hintText = 'This is a hint';

  it('should render Hint component correctly', () => {
    renderWithProviders(<Hint label="Test hint" text={hintText} />);
    const icon = screen.getByLabelText('Test hint');

    expect(icon).toBeInTheDocument();
  });

  it('should display hint text on hover', async () => {
    renderWithProviders(<Hint label="Test hint" text={hintText} />);
    const icon = screen.getByLabelText('Test hint');

    await act(async () => {
      fireEvent.mouseOver(icon);
    });

    expect(await screen.findByText(hintText)).toBeInTheDocument();
  });

  it('should hide hint text when mouse leaves', async () => {
    renderWithProviders(<Hint label="Test hint" text={hintText} />);
    const icon = screen.getByLabelText('Test hint');

    await act(async () => {
      fireEvent.mouseOver(icon);
    });

    await act(async () => {
      fireEvent.mouseOut(icon);
    });

    await waitFor(() => {
      expect(screen.queryByText(hintText)).not.toBeInTheDocument();
    });
  });
});
