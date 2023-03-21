import React from 'react';

const ProjectListItem = ({ project }) => {
    // destructuring the project object here
    const { projectName, colorClass } = project || {};

    // rendering a single project list item component here
    return (
        <div className={`checkbox-container ${colorClass}`}>
            <input type='checkbox' className={colorClass} checked />
            <p className='label'>{projectName}</p>
        </div>
    );
};

export default ProjectListItem;