import { apiSlice } from '../api/apiSlice';

// creating the tasks feature APIs here
export const tasksApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        // GET Query to get the tasks from the server
        getTasks: builder.query({
            query: () => '/tasks',
        }),
        // POST Mutation to add new task in the server
        addTask: builder.mutation({
            query: (data) => ({
                url: '/tasks',
                method: 'POST',
                body: data,
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const task = await queryFulfilled;

                // updating tasks pessimistically after adding a new task
                if (task?.data?.id) {
                    console.log(task.data.id);
                    dispatch(
                        apiSlice.util.updateQueryData('getTasks', undefined,
                            draft => {
                                draft.push(task.data);
                            })
                    );
                }
            }
        }),
    }),
});

export const {
    useGetTasksQuery,
    useAddTaskMutation,
} = tasksApi;
