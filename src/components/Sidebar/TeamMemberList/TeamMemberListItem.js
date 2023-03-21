import React from 'react';

const TeamMemberListItem = ({ teamMember }) => {
    // destructuring the team member object here
    const { name, avatar } = teamMember || {};

    // rendering a single team members list item component here
    return (
        <div className='checkbox-container'>
            <img src={avatar} className='team-avater' alt={name} />
            <p className='label'>{name}</p>
        </div>
    );
};

export default TeamMemberListItem;