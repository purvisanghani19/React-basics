import React, { useEffect, useState } from 'react';
import '../miniproject.css';

const Clock = () => {


    let time = new Date().toLocaleTimeString();

    const [digital, setDigital] = useState(time);

    const updatetime =()=>{
         time = new Date().toLocaleTimeString();
         setDigital(time);
    };

    setInterval(updatetime,1000);

    return (
        <>
            <div className='mini1-div'>
                <h2 className='clock'>{digital}</h2>
            </div>
        
        </>
    )
}

export default Clock;
