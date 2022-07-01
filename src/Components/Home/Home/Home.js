import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useQuery } from 'react-query'

import SingleTask from '../SingleTask/SingleTask';

const Home = () => {

    const inputRef = useRef()


    const { data: task, refetch } = useQuery('repoData', () =>
        fetch('https://young-sea-11778.herokuapp.com/todo', {
            method: 'GET'
        }).then(res =>
            res.json()
        )
    )


    // const handleDelete = (id) => {
    //     fetch(`https://young-sea-11778.herokuapp.com/todo/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'content-type': 'application/json'
    //         },

    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.acknowledged == true) {
    //                 toast.success('successfully deleted')
    //                 refetch()
    //             }
    //         })
    // }

    const handleSubmit = (event) => {

        event.preventDefault()
        const inputValue = inputRef.current.value;
        const input = {
            inputText: inputValue
        }


        if (inputValue) {

            fetch('https://young-sea-11778.herokuapp.com/todo', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(input)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged == true) {
                        toast.success('done')
                        inputRef.current.value = ''
                        refetch()
                    }
                })
        }


    }

    return (
        <div className='bg-[#222222] h-screen'>

            <div className='md:w-1/2 w-full mx-auto pt-[8rem]'>
                <h1 className='md:text-[2.5rem] text-[1.9rem] text-white text-center font-semibold'>TODO LIST APP</h1>

                <form action="" className='md:w-[50%] flex  w-[96%] mx-auto mt-10' onSubmit={handleSubmit}>
                    <input ref={inputRef} className='outline-0 Md:w-[80%] w-full px-5 py-1.5 text-[#222222] text-left sm:w-72"' type="text" />
                    <button type='submit' className=' text-white px-5 py-1.5 bg-[#1c94d9] duration-150 cursor-pointer hover:bg-[#0081e7]'>Add</button>
                </form>
                <div className='mt-10 flex flex-col items-center'>
                    {
                        task?.map(todo => <SingleTask key={todo._id} todo={todo} refetch={refetch}></SingleTask>)
                    }
                </div>
            </div>





            {/* {
                task?.map(todo => <li className='text-white' key={todo._id}>{todo.inputText} <button onClick={() => handleDelete(todo._id)} className="btn btn-xs">Delete</button> <label for="my-modal-6" className="btn modal-button">open modal</label>
                </li>)
            }
            <Modal></Modal> */}
        </div>
    );
};

export default Home; 