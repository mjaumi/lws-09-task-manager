import React from 'react';
import { useGetProjectsQuery } from '../../../features/projects/projectsApi';
import ProjectListItem from './ProjectListItem';

const ProjectList = () => {
    // integration or RTK query hooks here
    const { data: projects, isLoading, isError, error } = useGetProjectsQuery();

    // deciding what to render here
    let content = null;

    if (isLoading) {
        content = <p>Loading...</p>;
    }

    if (!isLoading && isError) {
        content = <p>{error.message}</p>;
    }

    if (!isLoading && !isError && !projects.length) {
        content = <p>No Projects Found!!</p>;
    }

    if (!isLoading && !isError && projects.length) {
        content = projects.map(project => <ProjectListItem
            key={project.id}
            project={project}
        />);
    }

    // rendering the project list component here
    return (
        <div>
            <h3 className='text-xl font-bold'>Projects</h3>
            <div className='mt-3 space-y-4'>
                {content}
            </div>
        </div>
    );
};

export default ProjectList;