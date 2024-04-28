import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [Num, setNum] = useState(0);

    useEffect(()=>{
        document.title=`you clicked me ${Num}`;
    })
    return (
        <>
            <button onClick={() => { setNum(Num + 1) }}>click me {Num} </button>
        </>
    )
}

export default Useeffect;
