import { apiSlice } from '../api/apiSlice';

// creating the tasks feature APIs here
export const tasksApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        // GET Query to get the tasks from the server
        getTasks: builder.query({
            query: () => '/tasks',
        }),
        // GET Query to get a single task from the server by taskId
        getTask: builder.query({
            query: taskId => `/tasks/${taskId}`,
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

            // updating tasks optimistically before deleting from server
            async onQueryStarted(taskId, { queryFulfilled, dispatch }) {
                let patchResult = dispatch(
                    apiSlice.util.updateQueryData('getTasks', undefined,
                        draft => {
                            // eslint-disable-next-line eqeqeq
                            const deletedTaskIndex = draft.findIndex(t => t.id == taskId);

                            draft.splice(deletedTaskIndex, 1);
                        })
                );

                queryFulfilled.catch(() => {
                    patchResult.undo();
                });
            }
        }),
        // PATCH Mutation to edit task from the server
        editTask: builder.mutation({
            query: ({ taskId, data }) => ({
                url: `/tasks/${taskId}`,
                method: 'PATCH',
                body: data,
            }),

            // updating tasks pessimistically after editing an existing task
            async onQueryStarted({ taskId, data }, { queryFulfilled, dispatch }) {
                const editedTask = await queryFulfilled;

                if (editedTask?.data?.id) {
                    dispatch(apiSlice.util.updateQueryData('getTasks', undefined,
                        draft => {
                            // eslint-disable-next-line eqeqeq
                            const editedTaskIndex = draft.findIndex(t => t.id == taskId);

                            draft.splice(editedTaskIndex, 1, editedTask.data);
                        }
                    )
                    );
                }
            }
        }),
        // PATCH Mutation to update status of a task
        updateStatus: builder.mutation({
            query: ({ taskId, data }) => ({
                url: `/tasks/${taskId}`,
                method: 'PATCH',
                body: data,
            }),
        }),
    }),
});

export const {
    useGetTasksQuery,
    useGetTaskQuery,
    useAddTaskMutation,
    useDeleteTaskMutation,
    useEditTaskMutation,
    useUpdateStatusMutation,
} = tasksApi;
