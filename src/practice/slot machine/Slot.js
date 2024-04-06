import React from 'react';
import '../arrayas/Props/card.css';

const Slot = () => {


    const Slotm = (props) => {

        // let x = props.x;
        // let y = props.y;
        // let z = props.y

        let {x,y,z} = props;

        if ((x === y) && (y === z)) {
            return (
                <>
                    <div className='head-slot'>
                        <h1>
                            {x}{y}{z}
                        </h1>
                        <p className='slot-p'>
                            this is matching
                        </p>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className='head-slot'>
                        <h1>
                            {x}{y}{z}
                        </h1>
                        <p className='slot-p'>
                            this is not matching
                        </p>
                    </div>
                </>
            )
        }
    }


    return (
        <>
            <h1 className='heading'>
                💻welcome to <span className='slot-span'>slot machin game 💻</span>
            </h1>

            <Slotm x="😏" y="😏" z="😏" />
            <Slotm x="🥴" y="💀" z="💀" />
            <Slotm x="➕" y="🤑" z="🤌" />
        </>
    )
}

export default Slot;
