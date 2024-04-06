import React, { useState } from 'react'
import '../miniproject.css';



const Changecolor = () => {

    const purple = "#BC7FCD";
    const [change, setChange] = useState(purple);
    const [name, setName] = useState("click me");
    const [btn, setBtn] = useState(); 

    const bgChange = () => {
        let newchange = "#FB9AD1";
        setChange(newchange);
        setName("Ouch ! 😫");
    }

    const bchange = () => {
        setChange("#FFCDEA");
        setName("Ayyoo----");
        setBtn('#49243E')
    }


    return (
        <>
            <div className='event' style={{ backgroundColor: change }}>
                <button className='event-btn' style={{backgroundColor:btn}} onClick={bgChange} onDoubleClick={bchange}>{name}</button>
            </div>
        </>
    )
}

export default Changecolor;
