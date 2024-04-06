import React, { useState } from 'react';
import '../miniproject.css';

const Increment = () => {

    const [stat, setStat] = useState(0);

    const clickinc = () => {
        setStat(stat + 1);
    };


    return (
        <>
            <div className='mini-div' style={{flexDirection :"column"}}>
                <h1>{stat}</h1>
                <button className="btn btn-primary" onClick={clickinc}>Go somewhere</button>
            </div>
        </>
    )

}

export default Increment;
