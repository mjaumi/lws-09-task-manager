import React from 'react';
import { ThreeDots } from 'react-loading-icons';


const Loading = () => {

    // rendering the loading component here
    return (
        <div className='flex justify-center'>
            <ThreeDots stroke='#06CD8B' fill='#06CD8B' />
        </div>
    );
};

export default Loading;