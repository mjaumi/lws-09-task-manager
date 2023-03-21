import React from 'react';
import EditTaskForm from '../components/EditTaskForm/EditTaskForm';
import Layout from '../Layout/Layout';

const EditTask = () => {

    // rendering the edit page here
    return (
        <Layout>
            <main className='relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none'>
                <EditTaskForm />
            </main>
        </Layout>
    );
};

export default EditTask;