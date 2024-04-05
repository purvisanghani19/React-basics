import React from 'react'
import Card from './Card';
import "./card.css";
import Sdata from './sdata';

const Cards = () => {

  // console.log(Sdata[0].title);

  return (
    <>

      <h1 className='heading'>
        List of top 5 netflix series
      </h1>
      {
        Sdata.map((val) => {
          <div className='main-card'>
            <Card img={val.img} title={val.title} link={val.link} />
          </div>
        })
      }

    </>
  )
}

export default Cards;
