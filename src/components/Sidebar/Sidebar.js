import React from 'react';
import ProjectList from './ProjectList/ProjectList';
import TeamMemberList from './TeamMemberList/TeamMemberList';

const Sidebar = () => {

    // rendering the sidebar component here
    return (
        <div className='sidebar'>
            <ProjectList />
            <TeamMemberList />
        </div>
    );
};

export default Sidebar;