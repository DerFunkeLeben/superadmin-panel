import { RoleKey } from '@/types/api/roles';

export type RolesFormValues = {
  [RoleKey.name]: string;
  [RoleKey.code]: string;
  [RoleKey.description]: string;
};
