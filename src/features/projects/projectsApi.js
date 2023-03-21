import { apiSlice } from '../api/apiSlice';

// creating the projects feature APIs here
export const projectsApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        // GET Query to get the projects from the server
        getProjects: builder.query({
            query: () => '/projects',
        }),
        // GET Query to get a single project from the server by name
        getProject: builder.query({
            query: projectName => `/projects?projectName_like=${projectName}`,
        }),
    }),
});

export const {
    useGetProjectsQuery,
    useGetProjectQuery,
} = projectsApi;
