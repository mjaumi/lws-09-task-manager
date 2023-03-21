import React from 'react';
import AddNewTaskForm from '../components/AddNewTaskForm/AddNewTaskForm';
import Layout from '../Layout/Layout';

const AddNewTask = () => {

    // rendering the add new task page here
    return (
        <Layout>
            <main className='relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none'>
                <AddNewTaskForm />
            </main>
        </Layout>
    );
};

export default AddNewTask;