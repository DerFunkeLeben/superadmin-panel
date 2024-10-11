import { FC } from 'react';

import AppModalsList from '@/App/AppModalsList';
import AppNotifications from '@/App/AppNotifications';
import AppRouter from '@/App/AppRouter';

const App: FC = () => {
  return (
    <>
      <AppRouter />
      <AppModalsList />
      <AppNotifications />
    </>
  );
};

export default App;
