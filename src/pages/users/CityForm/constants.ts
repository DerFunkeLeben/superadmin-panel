import { CityFormValues } from './types';

export enum CityKey {
  name = 'name',
  district = 'district',
  externalId = 'externalId',
}

export const CITY_FORM: CityFormValues = {
  [CityKey.name]: '',
  [CityKey.district]: '',
  [CityKey.externalId]: '',
};
