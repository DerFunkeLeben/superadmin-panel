import * as yup from 'yup';

import { GroupKey } from '@/types/api/groups';

export const formSchema = yup
  .object({
    [GroupKey.name]: yup.string().required('Укажите название'),
    [GroupKey.description]: yup.string().required('Укажите описание'),
    [GroupKey.code]: yup.string().required('Укажите код'),
  })
  .required();
