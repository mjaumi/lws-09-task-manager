import React from 'react';
import { useSelector } from 'react-redux';
import { useGetTasksQuery } from '../../features/tasks/tasksApi';
import TaskListItem from './TaskListItem';

const TaskList = () => {
    // integration of RTK query hooks here
    const { data: taskList, isLoading, isError } = useGetTasksQuery();

    // integration of react-redux hooks here
    const { filterBy } = useSelector(state => state.filters);

    // filtering the tasks based on selected projects here
    const filterTasksByProjects = task => {
        return filterBy.includes(task.project.projectName);
    }

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
        content = taskList
            .filter(filterTasksByProjects)
            .map(task => <TaskListItem
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