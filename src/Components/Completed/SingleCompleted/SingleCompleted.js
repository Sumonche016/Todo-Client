import React from 'react';

const SingleCompleted = ({ complete, refetch }) => {
    const { completeTask, _id } = complete

    const handledelete = (id) => {
        fetch(`http://localhost:5000/complete/${id}`, {
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
    }

    return (
        <div className='w-1/2 mx-auto'>

            <div className='w-[70%] bg-[#e31658] py-2 flex items-center justify-between mt-4 mx-auto'>
                <p className='text-white pl-2'>{completeTask}</p>
                <div>
                    <button onClick={() => handledelete(_id)} class="px-3 py-2 bg-[#e73422] duration-150 hover:bg-[#b01e15] text-white">X</button>
                </div>

            </div>
        </div>
    );
};

export default SingleCompleted;