import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleTask = ({ todo, refetch }) => {
    const { _id, inputText } = todo;
    const [show, setShow] = useState(true)
    const handleComplete = (id) => {
        fetch(`https://young-sea-11778.herokuapp.com/todo/${id}`, {
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
        fetch('https://young-sea-11778.herokuapp.com/complete', {
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


    const handleEdit = () => {
        setShow(true)
    }

    return (
        <div className='md:w-[70%] w-[90%] bg-[#e31658] flex items-center justify-between mt-4'>
            <p className='text-white pl-2'>{inputText}</p>
            {
                show && <Modal refetch={refetch} setShow={setShow} text={inputText} id={_id}></Modal>
            }
            <div>
                <label onClick={handleEdit} for="my-modal-6" class="px-3 text-white mr-2 py-2  duration-150 hover:bg-[#b01e15] modal-button">Edit</label>
                <button onClick={() => handleComplete(_id)} className="px-3 py-2  duration-150 hover:bg-[#b01e15] text-white">✓</button>
            </div>

        </div>
    );
};

export default SingleTask;