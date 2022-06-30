import React, { useRef } from 'react';

const Home = () => {
    const inputRef = useRef()
    const handleSubmit = (event) => {
        event.preventDefault()
        const inputValue = inputRef.current.value;

        console.log(inputValue)

    }

    return (
        <div className='bg-[#222222] h-screen'>
            <h1 className='text-[2.5rem] text-white text-center font-semibold'>TODO LIST APP</h1>
            <form action="" className='w-[40%] mx-auto mt-10' onSubmit={handleSubmit}>
                <input ref={inputRef} className='outline-0 w-[80%] px-5 py-1.5 text-[#222222] text-left sm:w-72"' type="text" />
                <button type='submit' className=' text-white px-5 py-1.5 bg-[#1c94d9] duration-150 cursor-pointer hover:bg-[#0081e7]'>Add</button>
            </form>
        </div>
    );
};

export default Home; 