import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProjectsQuery } from '../../features/projects/projectsApi';
import { useGetTaskQuery } from '../../features/tasks/tasksApi';
import { useGetTeamQuery } from '../../features/team/teamApi';
import Form from './Form';

const EditTaskForm = () => {
    // integration of react-router-dom hooks here
    const { taskId } = useParams();

    // integration of RTK query hooks here
    const { data: projects } = useGetProjectsQuery();
    const { data: team } = useGetTeamQuery();
    const { data: task, isLoading, isError } = useGetTaskQuery(taskId);

    // deciding what to render here
    let content = null;

    if (isLoading) {
        content = <h3>Loading...</h3>;
    }

    if (!isLoading && isError) {
        content = <h3>Failed to load the Task!!</h3>;
    }

    if (!isLoading && !isError && !task.id) {
        content = <h3>No Project Found!!</h3>;
    }

    if (!isLoading && !isError && task.id) {
        content = (
            <>
                <h1 className='mt-4 mb-8 text-3xl font-bold text-center text-gray-800'>
                    Edit Existing Task for Your Team
                </h1>
                <Form
                    task={task}
                    team={team}
                    projects={projects}
                />
            </>
        );
    }

    // rendering edit task form component here
    return content;
};

export default EditTaskForm;