import React, { useState } from 'react';
import '../miniproject.css';

const Increment = () => {

    let ct = new Date().toLocaleTimeString();

    const [stat, setStat] = useState(0);
    const [time, setTime] = useState(ct);



    const clickinc = () => {
        setStat(stat + 1);
    };

    const clicktime = () => {
        ct= new Date().toLocaleTimeString();
        setTime(ct);
    }


    return (
        <>

            <div className="container">
                <div className="section">
                    <h1>{stat}</h1>
                    <button className="bt-in" onClick={clickinc}>Go somewhere</button>
                </div>
                <div className="section">
                    <h1>{time}</h1>
                    <button className="bt-in" onClick={clicktime}>Get time</button>
                </div>
            </div>

        </>
    )

}

export default Increment;
