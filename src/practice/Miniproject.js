import React from 'react';
import './miniproject.css';

const Miniproject = () => {

    let time = new Date(2024 , 4 , 3 ,19);
    time = time.getHours();  
    let Greetings = " ";
    const cssStyle = {};

    if (time >= 1 && time < 12) {
        Greetings = "Good morning";
        cssStyle.color =" pink";
    }else if (time >= 12 && time < 19){
        Greetings = "Good afternoon";
        cssStyle.color = "beige";
    }else {
        Greetings = "Good night";
        cssStyle.color = "rouge";
    }

    return (
        <div className='mini-div'>
            <h1 className='mini-class'> Hello Sir !! <span style={cssStyle}> {Greetings} </span> </h1>
        </div>  
    )
}

export default Miniproject;
