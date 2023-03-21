import React from 'react';
import { useGetTeamQuery } from '../../../features/team/teamSlice';
import TeamMemberListItem from './TeamMemberListItem';

const TeamMemberList = () => {
    // integration of RTK query hooks here
    const { data: team, isLoading, isError } = useGetTeamQuery();

    // deciding what to render here
    let content = null;

    if (isLoading) {
        content = <h3>Loading...</h3>;
    }

    if (!isLoading && isError) {
        content = <h3>Failed to load the projects!!</h3>;
    }

    if (!isLoading && !isError && !team.length) {
        content = <h3>No Project Found!!</h3>;
    }

    if (!isLoading && !isError && team.length) {
        content = team.map(teamMember => <TeamMemberListItem
            key={teamMember.id}
            teamMember={teamMember}
        />);
    }

    // rendering team member list component here
    return (
        <div className='mt-8'>
            <h3 className='text-xl font-bold'>Team Members</h3>
            <div className='mt-3 space-y-4'>
                {content}
            </div>
        </div>
    );
};

export default TeamMemberList;