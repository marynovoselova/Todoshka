import { FC, Suspense } from 'react';
import { Provider } from 'react-redux';
import { ThemeContextProvider } from '@shared/context/ThemeContext';
import { LanguageContextProvider } from '@shared/context/LanguageContext';
import { Loading } from '@shared/components';
import AppContent from './AppContent';
import { store } from './store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <LanguageContextProvider>
          <Suspense fallback={<Loading />}>
            <AppContent />
          </Suspense>
        </LanguageContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};

export default App;
