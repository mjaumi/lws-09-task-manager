import React from 'react';
import { useSelector } from 'react-redux';
import { useGetTasksQuery } from '../../features/tasks/tasksApi';
import Loading from '../Loading/Loading';
import TaskListItem from './TaskListItem';

const TaskList = () => {
    // integration of RTK query hooks here
    const { data: taskList, isLoading, isError, error } = useGetTasksQuery();

    // integration of react-redux hooks here
    const { filterBy, searchBy } = useSelector(state => state.filters);

    // filtering the tasks based on selected projects here
    const filterTasksByProjects = task => {
        return filterBy.indexOf(task.project.projectName) > -1;
    }

    // searching tasks based on their title here
    const searchTasksByTaskName = task => {
        return task.taskName.toLowerCase().includes(searchBy.toLowerCase());
    }

    // deciding what to render here
    let content = null;

    if (isLoading) {
        content = <Loading />;
    }

    if (!isLoading && isError) {
        content = <h3 className='text-center font-medium text-xl'>{error.message}</h3>;
    }

    if (!isLoading && !isError && !taskList.length) {
        content = <h3 className='text-center font-medium text-xl'>No Tasks Found!!</h3>;
    }

    if (!isLoading && !isError && taskList.length) {
        taskList.filter(searchTasksByTaskName).length ?
            taskList.filter(filterTasksByProjects).length ?
                content = taskList
                    .filter(filterTasksByProjects)
                    .filter(searchTasksByTaskName)
                    .map(task => <TaskListItem
                        key={task.id}
                        task={task}
                    />)
                :
                content = <h3 className='text-center font-medium text-xl'>No Tasks Found!!</h3>
            :
            content = <h3 className='text-center font-medium text-xl'>No Tasks Found!!</h3>
    }

    // rendering task list component here
    return (
        <div className='lws-task-list'>
            {content}
        </div>
    );
};

export default TaskList;