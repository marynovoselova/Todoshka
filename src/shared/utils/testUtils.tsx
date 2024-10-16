import { ReactElement, Suspense } from 'react';
import { Provider } from 'react-redux';
import { act, render } from '@testing-library/react';
import { store } from '@app/store';

export const renderWithProviders = (ui: ReactElement) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

export const renderWithSuspense = async (
  ui: ReactElement,
  fallback: ReactElement = <div>Loading...</div>
) => {
  await act(async () => {
    render(<Suspense fallback={fallback}>{ui}</Suspense>);
  });
};
