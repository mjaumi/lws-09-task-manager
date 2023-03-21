import { apiSlice } from '../api/apiSlice';

// creating the team feature APIs here
export const teamSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        // GET Query to get the team list from the server
        getTeam: builder.query({
            query: () => '/team',
        }),
    }),
});

export const {
    useGetTeamQuery,
} = teamSlice;
