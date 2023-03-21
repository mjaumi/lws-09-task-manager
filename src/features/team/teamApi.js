import { apiSlice } from '../api/apiSlice';

// creating the team feature APIs here
export const teamApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        // GET Query to get the team list from the server
        getTeam: builder.query({
            query: () => '/team',
        }),
        // GET Query to get a single team member from the server by name
        getTeamMember: builder.query({
            query: memberName => `/team?name_like=${memberName}`,
        }),
    }),
});

export const {
    useGetTeamQuery,
    useGetTeamMemberQuery,
} = teamApi;
