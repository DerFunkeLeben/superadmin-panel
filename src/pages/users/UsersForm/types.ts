import { UserKey } from '@/types/api/users';

export type UsersFormValues = {
  [UserKey.name]: string;
  [UserKey.login]: string;
  [UserKey.email]: string;
};
