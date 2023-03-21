import React from 'react';
import TaskListItem from './TaskListItem';

const TaskList = () => {

    // rendering task list component here
    return (
        <div className='lws-task-list'>
            <TaskListItem />
            <TaskListItem />
            <TaskListItem />
            <TaskListItem />
            <TaskListItem />
            <TaskListItem />
        </div>
    );
};

export default TaskList;