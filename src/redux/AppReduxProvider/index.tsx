import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/redux/storeInstance';

export type AppReduxProviderProps = {
  children?: ReactNode;
};

const AppReduxProvider: FC<AppReduxProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppReduxProvider;
