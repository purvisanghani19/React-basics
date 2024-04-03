import React from 'react'

const Picture = () => {

    const img1 = "https://picsum.photos/200/300";
    const img2 = "https://picsum.photos/205/300";
    const img3 = "https://picsum.photos/210/300";

    const links = "https://picsum.photos/"


    return (
        <div>
            <img src={img1} alt='random images' />
            <img src={img2} alt='random images' />
            <a href={links} target='_purvi'>
                <img src={img3} alt='random images'  />
            </a>
        </div>
    )
}

export default Picture;
