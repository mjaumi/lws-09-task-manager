import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/svg/logo.svg';
import { alterSearch } from '../../features/filters/filtersSlice';

const Navbar = () => {
    // integration of react hooks here
    const [searchText, setSearchText] = useState('');

    // integration of react-redux hooks here
    const dispatch = useDispatch();

    // altering search text to search tasks here
    useEffect(() => {
        dispatch(alterSearch(searchText));
    }, [dispatch, searchText]);

    // rendering the navbar component here
    return (
        <nav className='container relative py-3'>
            <div className='flex items-center justify-between'>
                <Link to={'/'}>
                    <img src={logo} alt='logo' />
                </Link>
                <div className='flex-1 max-w-xs search-field group'>
                    <i className='fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500'></i>
                    <input type='text' placeholder='Search Task' className='search-input' id='lws-searchTask' value={searchText} onChange={e => setSearchText(e.target.value)} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;