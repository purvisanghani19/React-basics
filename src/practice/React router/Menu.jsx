import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <NavLink to='/'>about us</NavLink>
            <NavLink to='/contact'>contact us</NavLink>
            <NavLink to='/login'>login </NavLink>
            <NavLink to='/registration'>registration</NavLink>
        </>
    )
}

export default Menu;
