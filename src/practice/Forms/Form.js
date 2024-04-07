import React, { useState } from 'react';
import './form.css';

const Form = () => {

  const [name, setName] = useState("");
  const [fullname, setFullname] = useState();

  const iname = (event) => {
    setName(event.target.value)
  }

  const inName = () => {
    setFullname(name)
  }



  return (
    <div className="input-form">
      <h1 className='input-detail'>Hello,{fullname}  </h1>
      <input type='text' className='input' placeholder='Enter your name' onChange={iname} value={name} />
      <button type='submit' className='input-btn' onClick={inName}>Submit</button>
    </div>
  )
}

export default Form;
