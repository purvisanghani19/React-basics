import React, { useState } from 'react';
import './form.css';

const Form = () => {

  const [name, setName] = useState("");
  const [fullname, setFullname] = useState();

  const iname = (event) => {
    setName(event.target.value)
  }

  const inName = (e) => {
    e.preventDefault();
    setFullname(name)
  }
  return (
    <form onSubmit={inName}>
      <div className="input-form">
        <h1 className='input-detail'>Hello,{fullname}  </h1>
        <input type='text' className='input' placeholder='Enter your name' onChange={iname} value={name} />
        <button type='submit' className='input-btn'>Submit</button>
      </div>
    </form>
  )
}

export default Form;
