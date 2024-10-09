export enum AuthStatus {
  AUTHORIZED = 'AUTHORIZED',
  UNAUTHORIZED = 'UNAUTHORIZED',
}

export type AuthState = {
  authStatus: AuthStatus;
};

export type AuthData = {
  token: string;
};
