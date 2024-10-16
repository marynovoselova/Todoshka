import { render, screen } from '@testing-library/react';
import '@mocks/react-i18next';
import ErrorMessage from './ErrorMessage';

it('should render the error message and try again button', () => {
  render(<ErrorMessage />);

  expect(screen.getByText('Something went wrong')).toBeInTheDocument();

  const button = screen.getByRole('button', { name: 'Try Again' });
  expect(button).toBeInTheDocument();
});
