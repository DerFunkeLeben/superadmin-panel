import { GroupKey } from '@/types/api/groups';

export type GroupsFormValues = {
  [GroupKey.name]: string;
  [GroupKey.code]: string;
  [GroupKey.description]: string;
};
