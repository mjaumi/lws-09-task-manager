import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const Layout = ({ children }) => {

    // initiating the web application's layout here
    return (
        <>
            <Navbar />
            <div className='container relative'>
                {children}
            </div>
        </>
    );
};

export default Layout;