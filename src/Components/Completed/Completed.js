import React from 'react';
import { useQuery } from 'react-query'
import SingleCompleted from './SingleCompleted/SingleCompleted';

const Completed = () => {
    const { isLoading, data, refetch } = useQuery('repoData', () =>
        fetch('http://localhost:5000/complete', {
            method: 'GET'
        }).then(res =>
            res.json()
        )
    )
    return (
        <div className='bg-[#222222] h-screen'>
            <h1 className='md:text-[2.5rem] text-[1.9rem] pt-[8rem] text-white text-center font-semibold'>Completed Task Name</h1>

            <div className='mt-12'>
                {
                    data?.map(complete => <SingleCompleted refetch={refetch} key={complete._id} complete={complete
                    }></SingleCompleted>)
                }
            </div>
        </div>
    );
};

export default Completed;