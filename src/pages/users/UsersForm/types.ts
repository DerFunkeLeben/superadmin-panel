export enum UserKey {
  login = 'login',
  email = 'email',
  name = 'name',
}

export type UsersFormValues = {
  [UserKey.name]: string;
  [UserKey.login]: string;
  [UserKey.email]: string;
};
