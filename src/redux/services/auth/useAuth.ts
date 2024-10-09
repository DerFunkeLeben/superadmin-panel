import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { useAppSelector } from '@/redux/hooks/useAppSelector';

import { login, logout } from './thunks';
import { AuthStatus } from './auth.types';
import { LoginRequest } from '@/types/api/auth';

const useAuth = () => {
  const authStatus = useAppSelector((state) => state.auth.authStatus);
  const dispatch = useAppDispatch();

  const isAuthorized = authStatus === AuthStatus.AUTHORIZED;
  const isNotAuthorized = authStatus === AuthStatus.UNAUTHORIZED;

  const handleLogin = async (data: LoginRequest) => await dispatch(login(data)).unwrap();

  const handleLogout = async () => await dispatch(logout()).unwrap();

  return { isAuthorized, isNotAuthorized, handleLogin, handleLogout };
};

export default useAuth;
