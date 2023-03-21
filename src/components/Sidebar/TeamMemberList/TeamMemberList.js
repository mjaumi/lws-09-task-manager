import React from 'react';
import TeamMemberListItem from './TeamMemberListItem';

const TeamMemberList = () => {

    // rendering team member list component here
    return (
        <div className='mt-8'>
            <h3 className='text-xl font-bold'>Team Members</h3>
            <div className='mt-3 space-y-4'>
                <TeamMemberListItem />
                <TeamMemberListItem />
                <TeamMemberListItem />
                <TeamMemberListItem />
                <TeamMemberListItem />
                <TeamMemberListItem />
                <TeamMemberListItem />
            </div>
        </div>
    );
};

export default TeamMemberList;