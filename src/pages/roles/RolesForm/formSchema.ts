import * as yup from 'yup';

import { RoleKey } from '@/types/api/roles';

export const formSchema = yup
  .object({
    [RoleKey.name]: yup.string().required('Укажите название'),
    [RoleKey.description]: yup.string().required('Укажите описание'),
    [RoleKey.code]: yup.string(),
  })
  .required();
