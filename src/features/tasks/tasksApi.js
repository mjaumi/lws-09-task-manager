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
            query: data => ({
                url: '/tasks',
                method: 'POST',
                body: data,
            }),

            // updating tasks pessimistically after adding a new task
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const task = await queryFulfilled;

                if (task?.data?.id) {
                    dispatch(
                        apiSlice.util.updateQueryData('getTasks', undefined,
                            draft => {
                                draft.push(task.data);
                            })
                    );
                }
            }
        }),
        // DELETE Mutation to delete a task from the server
        deleteTask: builder.mutation({
            query: taskId => ({
                url: `/tasks/${taskId}`,
                method: 'DELETE',
            }),

            // updating tasks optimistically after deleting from server
            async onQueryStarted(taskId, { queryFulfilled, dispatch }) {
                let patchResult = dispatch(
                    apiSlice.util.updateQueryData('getTasks', undefined,
                        draft => {
                            // eslint-disable-next-line eqeqeq
                            const deletedTaskIndex = draft.findIndex(t => t.id == taskId);

                            console.log('Deleted Task Index: ', deletedTaskIndex);
                            draft.splice(deletedTaskIndex, 1);
                        })
                );

                queryFulfilled.catch(() => {
                    patchResult.undo();
                });
            }
        }),
    }),
});

export const {
    useGetTasksQuery,
    useAddTaskMutation,
    useDeleteTaskMutation,
} = tasksApi;
