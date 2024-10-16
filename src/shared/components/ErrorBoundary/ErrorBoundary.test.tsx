import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

const ProblematicComponent = () => {
  throw new Error('Test Error');
};

describe('ErrorBoundary', () => {
  it('should display ErrorMessage when an error is thrown', () => {
    render(
      <ErrorBoundary>
        <ProblematicComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });
});
