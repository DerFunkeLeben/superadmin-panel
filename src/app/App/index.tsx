import { FC } from 'react';

import AppModalsList from '@/app/App/components/AppModalsList';
import AppNotifications from '@/app/App/components/AppNotifications';
import AppRouter from '@/app/App/components/AppRouter';

const App: FC = () => {
  return (
    <div>
      <AppRouter />
      <AppModalsList />
      <AppNotifications />
    </div>
  );
};

export default App;
