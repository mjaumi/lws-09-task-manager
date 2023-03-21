import React from 'react';

const TeamMemberListItem = () => {

    // rendering a single team members list item component here
    return (
        <div className='checkbox-container'>
            <img src='./images/avatars/sumit.png' className='team-avater' alt='team member' />
            <p className='label'>Sumit Saha</p>
        </div>
    );
};

export default TeamMemberListItem;