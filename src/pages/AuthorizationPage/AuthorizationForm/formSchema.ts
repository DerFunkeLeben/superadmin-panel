import * as yup from 'yup';

export const formSchema = yup
  .object({
    login: yup.string().required('Введите логин'),
    password: yup
      .string()
      .min(6, 'Пароль должен состоять хотя бы из 6 символов')
      .required('Введите пароль'),
  })
  .required();
