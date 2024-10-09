import * as yup from 'yup';

export const STORE_SIDEBAR_STATE = 'STORE_SIDEBAR_STATE';
export const CONTENT_HEADER_ID = 'CONTENT_HEADER_ID';

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const FormRuler = {
  phone: yup.lazy((value) =>
    value === ''
      ? yup.string().nullable()
      : yup.string().nullable().matches(phoneRegExp, 'Указан невалидный номер телефона'),
  ),
  email: yup.string().nullable().email('Указан неверный E-mail'),
};

export enum Client {
  DANONE = 'danone',
  SERVIER = 'servier',
  LOREAL = 'loreal',
  GALDERMA = 'galderma',
  VEKTORPHARM = 'vektorpharm',
  NIKAMED = 'nikamed',
  OTCPHARM = 'otcpharm',
  INFAPRIM = 'infaprim',
}

export const knownClients = Object.values(Client);
