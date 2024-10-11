import { api } from '@/redux/api';
import {
  invalidatesList,
  invalidatesListItem,
  providesList,
  providesListItem,
} from '@/redux/utils';
import { removeEmptyKeys } from '@/utils/removeEmptyKeys';
import { Tags } from '@/redux/constants';
import {
  CityCreateRequest,
  CityDeleteRequest,
  CityGetByIdResponse,
  CityGetBytIdRequest,
  CityListRequest,
  CityListResponse,
  CityUpdateRequest,
} from '@/types/api/users';

const citiesApi = api.injectEndpoints({
  endpoints: (builder) => {
    return {
      getCityList: builder.query<CityListResponse['data'], CityListRequest>({
        query: (arg) => ({
          url: '/cities',
          method: 'GET',
          params: removeEmptyKeys(arg),
        }),
        providesTags: providesList(Tags.CITIES),
        transformResponse: (response: CityListResponse) => response.data,
      }),

      getCityById: builder.query<CityGetByIdResponse['data'], CityGetBytIdRequest>({
        query: (arg) => ({
          url: `/cities/${arg}`,
          method: 'GET',
        }),
        providesTags: providesListItem(Tags.CITIES),
        transformResponse: (response: CityGetByIdResponse) => response.data,
      }),

      createCity: builder.mutation<void, CityCreateRequest>({
        query: (body) => ({
          url: `/cities`,
          method: 'POST',
          body,
        }),
        invalidatesTags: invalidatesList(Tags.CITIES),
      }),

      updateCity: builder.mutation<void, CityUpdateRequest>({
        query: (arg) => ({
          url: `/cities/${arg.id}`,
          method: 'PATCH',
          body: arg.patch,
        }),
        invalidatesTags: invalidatesListItem(Tags.CITIES),
      }),

      deleteCity: builder.mutation<void, CityDeleteRequest>({
        query: (arg) => ({
          url: `/cities/${arg}`,
          method: 'DELETE',
        }),
        invalidatesTags: invalidatesListItem(Tags.CITIES),
      }),
    };
  },
});

export const {
  useGetCityByIdQuery,
  useGetCityListQuery,
  useCreateCityMutation,
  useDeleteCityMutation,
  useUpdateCityMutation,
} = citiesApi;
