import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/app/App';
import AppTheme from './app/App/components/AppThemeProvider';
import AppReduxProvider from './redux/AppReduxProvider';

import '@/styles.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <AppReduxProvider>
      <BrowserRouter>
        <AppTheme>
          <App />
        </AppTheme>
      </BrowserRouter>
    </AppReduxProvider>
  </StrictMode>,
);
