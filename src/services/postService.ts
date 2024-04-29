import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://test-front.framework.team',
  }),
  endpoints: (build: {
    query: (arg0: { query: () => { url: string } }) => any;
  }) => ({
    fetchAllPosts: build.query({
      query: () => ({
        url: '/paintings',
      }),
    }),
  }),
});

export default postAPI;
