import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { STORE_SIDEBAR_STATE } from '@/resources/constants';
import { Client, knownClients } from '@/resources/constants';
import { UserState } from '@/redux/services/user/user.types';

const safeClient = (import.meta.env.VITE_CLIENT || Client.DANONE) as Client;
const client = knownClients.includes(safeClient) ? safeClient : Client.DANONE;

const initialState: UserState = {
  isOpenSidebar: localStorage.getItem(STORE_SIDEBAR_STATE) !== 'false',
  client,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetAll: (state) => {
      state.isOpenSidebar = true;
    },
    setSidebarState: (state, action: PayloadAction<boolean>) => {
      state.isOpenSidebar = action.payload;
      localStorage.setItem(STORE_SIDEBAR_STATE, String(action.payload));
    },
  },
});

export { userSlice };
