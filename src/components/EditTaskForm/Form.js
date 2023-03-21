import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { projectsApi } from '../../features/projects/projectsApi';
import { useEditTaskMutation } from '../../features/tasks/tasksApi';
import { teamApi } from '../../features/team/teamApi';

const Form = ({ task, team, projects }) => {
    // destructuring the task object here
    const { id, taskName, teamMember, project, deadline } = task || {};

    // integration of RTK query hooks here
    const [editTask, { isLoading, isError, isSuccess }] = useEditTaskMutation();

    // integration of react hooks here
    const [updatedTaskName, setUpdatedTaskName] = useState(taskName);
    const [updatedAssignedTo, setUpdatedAssignedTo] = useState(teamMember?.name);
    const [updatedProjectName, setUpdatedProjectName] = useState(project?.projectName);
    const [updatedDeadline, setUpdatedDeadline] = useState(deadline);
    const [selectedProjectInfo, setSelectedProjectInfo] = useState(undefined);
    const [selectedMemberInfo, setSelectedMemberInfo] = useState(undefined);

    // integration of react-redux hooks here
    const dispatch = useDispatch();

    // integration of react-router-dom hooks here
    const navigate = useNavigate();

    // getting selected project for the new task here
    useEffect(() => {
        if (updatedProjectName) {
            dispatch(projectsApi.endpoints.getProject.initiate(updatedProjectName))
                .unwrap()
                .then(data => setSelectedProjectInfo(data))
                .catch();
        }
    }, [updatedProjectName, dispatch]);

    // getting selected team member for the new task here
    useEffect(() => {
        if (updatedAssignedTo) {
            dispatch(teamApi.endpoints.getTeamMember.initiate(updatedAssignedTo))
                .unwrap()
                .then(data => setSelectedMemberInfo(data))
                .catch();
        }
    }, [updatedAssignedTo, dispatch]);

    // showing notification to the user based on success or error here
    useEffect(() => {
        if (isSuccess) {
            toast.success('Task Modified Successfully!!!');
            navigate('/');
        }

        if (isError) {
            toast.error('Failed To Edit Existing Task!!!');
        }
    }, [isSuccess, isError, navigate]);

    // handler function to handle edit task form submission
    const editFormSubmissionHandler = e => {
        e.preventDefault();

        editTask({
            taskId: id,
            data: {
                taskName: updatedTaskName,
                teamMember: selectedMemberInfo[0],
                project: selectedProjectInfo[0],
                deadline: updatedDeadline,
            }
        });
    }


    // rendering the edit form here
    return (
        <div className='justify-center mb-10 space-y-2 md:flex md:space-y-0'>
            <form className='space-y-6' onSubmit={editFormSubmissionHandler}>
                <div className='fieldContainer'>
                    <label htmlFor='lws-taskName'>Task Name</label>
                    <input
                        type='text'
                        name='taskName'
                        id='lws-taskName'
                        required
                        placeholder='Implement RTK Query'
                        value={updatedTaskName}
                        onChange={e => setUpdatedTaskName(e.target.value)}
                    />
                </div>

                <div className='fieldContainer'>
                    <label>Assign To</label>
                    <select name='teamMember' id='lws-teamMember' required value={updatedAssignedTo}
                        onChange={e => setUpdatedAssignedTo(e.target.value)}>
                        <option value='' hidden>Select Job</option>
                        {
                            team?.map(member => <option
                                key={member.id}
                            >
                                {member.name}
                            </option>
                            )
                        }
                    </select>
                </div>
                <div className='fieldContainer'>
                    <label htmlFor='lws-projectName'>Project Name</label>
                    <select id='lws-projectName' name='projectName' required value={updatedProjectName}
                        onChange={e => setUpdatedProjectName(e.target.value)}>
                        <option value='' hidden>Select Project</option>
                        {
                            projects?.map(project => <option
                                key={project.id}
                            >
                                {project.projectName}
                            </option>
                            )
                        }
                    </select>
                </div>

                <div className='fieldContainer'>
                    <label htmlFor='lws-deadline'>Deadline</label>
                    <input type='date' name='deadline' id='lws-deadline' required value={updatedDeadline}
                        onChange={e => setUpdatedDeadline(e.target.value)} />
                </div>

                <div className='text-right'>
                    <button type='submit' className='lws-submit' disabled={isLoading}>Save</button>
                </div>
            </form>
        </div>
    );
};

export default Form;