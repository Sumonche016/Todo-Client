import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleTask = ({ todo, refetch }) => {
    const { _id, inputText } = todo;
    const [show, setShow] = useState(true)
    const handleComplete = (id) => {
        fetch(`http://localhost:5000/todo/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })

        const complete = { completeTask: inputText }
        fetch('http://localhost:5000/complete', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(complete)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })


    }




    return (
        <div className='w-[70%] bg-[#e31658] flex items-center justify-between mt-4'>
            <p className='text-white pl-2'>{inputText}</p>
            {
                show && <Modal text={inputText} ></Modal>
            }
            <div>

                <button onClick={() => handleComplete(_id)} class="px-3 py-2 bg-[#e73422] duration-150 hover:bg-[#b01e15] text-white">✓</button>
            </div>

        </div>
    );
};

export default SingleTask;