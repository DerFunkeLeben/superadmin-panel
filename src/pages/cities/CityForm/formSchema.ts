import * as yup from 'yup';

import { CityKey } from './constants';

export const formSchema = yup
  .object({
    [CityKey.name]: yup.string().required('Укажите название'),
  })
  .required();
