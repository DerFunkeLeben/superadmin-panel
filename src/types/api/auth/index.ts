export type LoginRequest = {
  login: string;
  password: string;
};

export type LoginResponse = {
  access_token: string;
  refresh_token: string;
};

export type RefreshResponse = LoginResponse;

export type ProfileResponse = {
  id: string;
  login: string;
  roles: string[];
  iat: number;
  exp: number;
};
