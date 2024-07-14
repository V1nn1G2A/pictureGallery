import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPicture, ArtistData, LocationData } from '../models/IPictureItem';

interface ResponseData {
  data: IPicture[];
  totalCount: number;
}

const pictureAPI = createApi({
  reducerPath: 'pictureAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://test-front.framework.team',
  }),
  endpoints: build => ({
    fetchAllNames: build.query<ArtistData[], void>({
      query: () => ({
        url: '/authors',
      }),
    }),
    fetchAllLocations: build.query<LocationData[], void>({
      query: () => ({
        url: '/locations',
      }),
    }),
    fetchAllPictures: build.query<
      ResponseData,
      {
        limit?: number;
        page?: number;
        findString?: string;
        authorId?: number;
        locationId?: number;
        yearFrom?: string;
        yearTo?: string;
      }
    >({
      query: ({ limit = 6, page = 1, findString = '', authorId, locationId, yearFrom, yearTo }) => ({
        url: '/paintings',
        params: {
          _page: page,
          _limit: limit,
          q: findString,
          authorId,
          locationId,
          created_gte: yearFrom,
          created_lte: yearTo,
        },
      }),
      transformResponse: (response: IPicture[], meta) => ({
        data: response,
        totalCount: Number(meta?.response?.headers.get('x-total-count')),
      }),
    }),
  }),
});

export const { useFetchAllPicturesQuery, useFetchAllNamesQuery, useFetchAllLocationsQuery } = pictureAPI;
export default pictureAPI;
