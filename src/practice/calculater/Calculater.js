import React from 'react'
import { add, sub, div, mult } from './calc';



const Calculater = () => {
    return (
        <>
            <ul>
                <li>The sum of two number is  {add(40, 4)}</li>
                <li>The sub of two number is  {sub(40, 4)}</li>
                <li>The div of two number is  {div(40, 4)}</li>
                <li>The mult of two number is  {mult(40, 4)}</li>
            </ul>
        </>
    )
}

export default Calculater;
