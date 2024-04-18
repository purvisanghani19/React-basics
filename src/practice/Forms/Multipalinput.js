import React, { useState } from 'react';
import './form.css';
    
const Multipalinput = () => {

    const obj = {
        email: "",
        password: ""
    }

    const [login, setLogin] = useState(obj);

    // console.log('login', login) 

    const handlelogin = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({ ...login, [name]: value });
    }

    const logindone = () => {
        alert(login.email + login.password);
    }

    return (
        <>
            <form >
                <div className="input-form">
                    <h1 className='input-detail'>Hello, </h1>
                    <input type='text' className='input' placeholder='Enter your name' onChange={handlelogin} name='email' value={login.email} />
                    <input type='password' style={{ marginTop: "20px" }} className='input' placeholder='Enter your name' onChange={handlelogin} name='password' value={login.password} />
                    <button type='submit' className='input-btn' onClick={logindone}>Submit</button>
                </div>
            </form>

        </>
    )
}

export default Multipalinput
