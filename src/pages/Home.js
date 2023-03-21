import React from 'react';
import AddNewTaskHeader from '../components/AddNewTaskHeader/AddNewTaskHeader';
import Sidebar from '../components/Sidebar/Sidebar';
import TaskList from '../components/TaskList/TaskList';
import Layout from '../Layout/Layout';

const Home = () => {

    // rendering the home page here
    return (
        <Layout>
            <Sidebar />
            <div className='lg:pl-[16rem] 2xl:pl-[23rem]'>
                <main className='relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none'>
                    <AddNewTaskHeader />
                    <TaskList />
                </main>
            </div>
        </Layout>
    );
};

export default Home;