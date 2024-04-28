import React, { useState } from 'react';
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';



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
            <AddBoxRoundedIcon onClick={inccrement} />
            <IndeterminateCheckBoxRoundedIcon onClick={decrement} />
        </>
    )
}

export default Inc;
