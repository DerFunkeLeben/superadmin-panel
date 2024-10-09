export const AUTH_TOKEN_LS_KEY = 'superadmin__auth-token';

class LocalStorageService {
  setAuthKey(token: string) {
    localStorage.setItem(AUTH_TOKEN_LS_KEY, token);
  }

  getAuthKey() {
    return localStorage.getItem(AUTH_TOKEN_LS_KEY);
  }

  clearAuthKey() {
    return localStorage.removeItem(AUTH_TOKEN_LS_KEY);
  }
}

export const localStorageService = new LocalStorageService();
