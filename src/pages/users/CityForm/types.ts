import { CityKey } from './constants';

export type CityFormValues = {
  [CityKey.name]: string;
  [CityKey.district]: string;
  [CityKey.externalId]: string;
};
