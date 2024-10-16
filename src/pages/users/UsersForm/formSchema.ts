import * as yup from 'yup';

import { UserKey } from './types';

export const formSchema = yup
  .object({
    [UserKey.name]: yup.string().required('Укажите имя'),
    [UserKey.login]: yup.string().required('Укажите login'),
    [UserKey.email]: yup.string().required('Укажите email').email('Указан неверный E-mail'),
  })
  .required();
