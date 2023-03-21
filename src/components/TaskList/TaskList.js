import React from 'react';
import { useGetTasksQuery } from '../../features/tasks/tasksApi';
import TaskListItem from './TaskListItem';

const TaskList = () => {
    // integration of RTK query hooks here
    const { data: taskList, isLoading, isError } = useGetTasksQuery();

    // deciding what to render here
    let content = null;

    if (isLoading) {
        content = <h3>Loading...</h3>;
    }

    if (!isLoading && isError) {
        content = <h3>Failed to load the projects!!</h3>;
    }

    if (!isLoading && !isError && !taskList.length) {
        content = <h3>No Project Found!!</h3>;
    }

    if (!isLoading && !isError && taskList.length) {
        content = taskList?.map(task => <TaskListItem
            key={task?.id}
            task={task}
        />);
    }

    // rendering task list component here
    return (
        <div className='lws-task-list'>
            {content}
        </div>
    );
};

export default TaskList;