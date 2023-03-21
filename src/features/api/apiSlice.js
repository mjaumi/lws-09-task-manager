import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// creating api slice for RTK query here
export const apiSlice = createApi({
    reducerPath: 'TaskManagerAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
    }),
    tagTypes: [],
    endpoints: builder => ({}),
})