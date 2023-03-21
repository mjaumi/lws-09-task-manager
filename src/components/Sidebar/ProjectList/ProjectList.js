import React from 'react';
import ProjectListItem from './ProjectListItem';

const ProjectList = () => {

    // rendering the project list component here
    return (
        <div>
            <h3 className='text-xl font-bold'>Projects</h3>
            <div className='mt-3 space-y-4'>
                <ProjectListItem />
                <ProjectListItem />
                <ProjectListItem />
                <ProjectListItem />
                <ProjectListItem />
                <ProjectListItem />
            </div>
        </div>
    );
};

export default ProjectList;