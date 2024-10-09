import { userSlice } from '@/redux/services/user/user.slice';
import { AppThunk } from '@/redux/types';

const { setSidebarState } = userSlice.actions;

export const setSidebarStateAction =
  (state: boolean): AppThunk =>
  (dispatch) => {
    dispatch(setSidebarState(state));
  };
