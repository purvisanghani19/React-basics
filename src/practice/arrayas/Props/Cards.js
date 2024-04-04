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
      <div className='main-card'>
        <Card img={Sdata[0].img} title={Sdata[0].title} link={Sdata[0].link} />
        <Card img={Sdata[1].img} title={Sdata[1].title} link={Sdata[1].link} />
        <Card img={Sdata[2].img} title={Sdata[2].title} link={Sdata[2].link} />
        <Card img={Sdata[3].img} title={Sdata[3].title} link={Sdata[3].link} />
      </div>

    </>
  )
}

export default Cards;
