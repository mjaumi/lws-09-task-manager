import React from 'react';
import { useGetProjectsQuery } from '../../../features/projects/projectsApi';
import ProjectListItem from './ProjectListItem';

const ProjectList = () => {
    // integration or RTK query hooks here
    const { data: projects, isLoading, isError } = useGetProjectsQuery();

    // deciding what to render
    let content = null;

    if (isLoading) {
        content = <h3>Loading...</h3>;
    }

    if (!isLoading && isError) {
        content = <h3>Failed to load the projects!!</h3>;
    }

    if (!isLoading && !isError && !projects.length) {
        content = <h3>No Project Found!!</h3>;
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