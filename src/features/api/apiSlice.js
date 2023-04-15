import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// creating api slice for RTK query here
export const apiSlice = createApi({
    reducerPath: 'taskManagerAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://lws-task-manager.onrender.com',
    }),
    tagTypes: [],
    endpoints: builder => ({}),
})