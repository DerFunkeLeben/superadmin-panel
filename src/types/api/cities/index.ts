import { ApiResponseWithPagination } from '@/redux/types';
import { QueryParams } from '@/types/api/common';

export type CityEntity = {
  id: number;
  name: string;
};

export type CityListResponse = {
  data: ApiResponseWithPagination<CityEntity>;
};

export type CityListRequest = QueryParams<'name'> & {
  region?: string;
};

export type CityGetByIdResponse = {
  data: CityEntity;
};

export type CityGetBytIdRequest = number | string;

export type CreateCityDto = {
  name: string;
};

export type UpdateCityDto = {
  name?: string;
};

export type CityCreateRequest = CreateCityDto;

export type CityUpdateRequest = {
  id: number | string;
  patch: UpdateCityDto;
};

export type CityDeleteRequest = number | string;

export type CityRecord = CityEntity;
