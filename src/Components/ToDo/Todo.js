import React from 'react';

import { useQuery } from 'react-query'
import SingleTask from '../Home/SingleTask/SingleTask';
const Todo = () => {

    const { data: task, refetch } = useQuery('repoData', () =>
        fetch('https://young-sea-11778.herokuapp.com/todo', {
            method: 'GET'
        }).then(res =>
            res.json()
        )
    )
    return (
        <div className='bg-[#222222] h-screen'>
            <h1 className='text-[2.5rem] pt-[8rem] text-white text-center font-semibold'>Completed Task Name</h1>

            <div className='mt-10 flex flex-col items-center'>
                {
                    task?.map(todo => <SingleTask key={todo._id} todo={todo} refetch={refetch}></SingleTask>)
                }
            </div>
        </div>
    );
};

export default Todo;