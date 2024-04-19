import React, { useState } from 'react'

const Inc = () => {

    const [Inc, setInc] = useState(0);

    const inccrement = () => {
        setInc(Inc + 1);
    }

    const decrement = () => {
        if (Inc > 0) {
            setInc(Inc - 1);
        } else {
            alert("sorry you have reached to the limit !")
            setInc(0)
        }
    }



    return (

        <>
            <p>{Inc}</p>
            <button onClick={inccrement}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}

export default Inc;
