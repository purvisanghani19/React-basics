import React from 'react';

const Tcomponant = (props) => {

  //   const deleteitem = () => {
  //     console.log("dlweewet")
  // }

  return (
    <div>
      <li >{props.text}</li>
      <button onClick={() => {
        props.onSelect(props.id)
      }} >close</button>
    </div>
  )
}

export default Tcomponant;
