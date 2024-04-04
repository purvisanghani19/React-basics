import React from 'react';

const Card = (props) => {
    // console.log(props);

    return (
        <>
            <div className="card1" style={{ width: "18rem" ,margin:"50px" }}>
                <img className="card-img-top" src={props.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title" style={{textTransform:"uppercase"}}>{props.title}</h5>
                    <p className="card-text">Netflix series</p>
                    <a href={props.link} className="btn btn-primary" target='_suits'>Watch Now</a>
                </div>
            </div>
        </>
    )
}

export default Card;
