import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { alterFilter } from '../../../features/filters/filtersSlice';

const ProjectListItem = ({ project }) => {
    // destructuring the project object here
    const { projectName, colorClass } = project || {};

    // integration of react-redux hooks here
    const dispatch = useDispatch();

    // integration or react hooks here
    const [isChecked, setIsChecked] = useState(true);

    // altering the filter state here
    useEffect(() => {
        dispatch(alterFilter({
            value: projectName,
            isChecked,
        }));
    }, [dispatch, projectName, isChecked]);

    // rendering a single project list item component here
    return (
        <div className={`checkbox-container ${colorClass}`}>
            <input type='checkbox' onChange={e => setIsChecked(e.target.checked)} className={colorClass} checked={isChecked} />
            <p className='label'>{projectName}</p>
        </div>
    );
};

export default ProjectListItem;