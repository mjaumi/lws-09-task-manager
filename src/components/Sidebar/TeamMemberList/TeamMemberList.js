import React from 'react';
import { useGetTeamQuery } from '../../../features/team/teamApi';
import TeamMemberListItem from './TeamMemberListItem';

const TeamMemberList = () => {
    // integration of RTK query hooks here
    const { data: team, isLoading, isError } = useGetTeamQuery();

    // deciding what to render here
    let content = null;

    if (isLoading) {
        content = <p>Loading...</p>;
    }

    if (!isLoading && isError) {
        content = <p>Failed To Load The Team List!!</p>;
    }

    if (!isLoading && !isError && !team.length) {
        content = <p>No Team Member Found!!</p>;
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