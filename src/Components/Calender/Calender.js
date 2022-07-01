import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const Calender = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div className='bg-[#222222] h-screen'>
            <div className='pt-[8rem] flex justify-center items-center'>
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />;
            </div>
            <p className='text-white text-center'>You picked {format(date, 'PP')}.</p>;
        </div>
    );
};

export default Calender;