import React from 'react'
import { useParams } from 'react-router';

const Useparams = () => {

  const { id } = useParams();

  return (
    <>
      <p>Useparams {id} </p>
      <h1>dfdsfdsf</h1>
    </>
  )
}

export default Useparams;
