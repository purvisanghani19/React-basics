import React, { useState } from 'react';
import Tcomponant from './Tcomponant';


const Todo = () => {

    const [list, setList] = useState("");
    const [listarr, setListarr] = useState([]);


    const todochange = (evant) => {
        setList(evant.target.value)
    }

    const additem = () => {
        setListarr([...listarr, list]);
        setList('');
    }

    // console.log('listarr', listarr)

    const deleteitem = (id) => {
        // console.log("dlweewet")
        setListarr(listarr.filter((arr, index) => {
            return index !== id;
        }))
    }


    return (
        <>
            <h1>
                todo list
            </h1>

            <input type='text' className='input' name="list" onChange={todochange} value={list} />
            <button type='submit' onClick={additem} >+</button>

            <ol>

                {listarr.map((item, index) => {
                    return <Tcomponant
                        key={index}
                        text={item}
                        id={index}
                        onSelect={deleteitem}
                    />
                })}

            </ol>

        </>
    )
}

export default Todo;
