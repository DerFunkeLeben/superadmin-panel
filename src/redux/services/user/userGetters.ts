import { UserState } from '@/redux/services/user/user.types';
import { AppRootState } from '@/redux/types';

export const selectSidebarState = (state: AppRootState) => (state.user as UserState).isOpenSidebar;
export const selectClient = (state: AppRootState) => (state.user as UserState).client;
