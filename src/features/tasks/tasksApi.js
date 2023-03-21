import { apiSlice } from '../api/apiSlice';

// creating the tasks feature APIs here
export const tasksApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        // GET Query to get the tasks from the server
        getTasks: builder.query({
            query: () => '/tasks',
        }),
    }),
});

export const {
    useGetTasksQuery,
} = tasksApi;
