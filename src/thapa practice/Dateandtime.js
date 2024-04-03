import React from 'react'

const Dateandtime = () => {

    const d = new Date().toLocaleDateString();
    const t = new Date().toLocaleTimeString();
    const name = "purvi"

    return (
        <div>
            <h1>{name}</h1>
            <p>today's date is {`${d}`}</p>
            <p>today's current time is {`${t}`}</p>
            
        </div>
    )
}

export default Dateandtime
