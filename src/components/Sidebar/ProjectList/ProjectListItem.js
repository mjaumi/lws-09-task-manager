import React from 'react';

const ProjectListItem = () => {

    // rendering a single project list item component here
    return (
        <div className='checkbox-container'>
            <input type='checkbox' className='color-scoreboard' checked />
            <p className='label'>Scoreboard</p>
        </div>
    );
};

export default ProjectListItem;