import { apiSlice } from '../api/apiSlice';

// creating the projects feature APIs here
export const projectsApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        // GET Query to get the projects from the server
        getProjects: builder.query({
            query: () => '/projects',
        }),
    }),
});

export const {
    useGetProjectsQuery,
} = projectsApi;
