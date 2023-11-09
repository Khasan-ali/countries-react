import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <>
        <ul>
            <li>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/product'}>Product</NavLink>
            </li>
            <li>
                <NavLink to={'/about'}>About</NavLink>
            </li>
        </ul>
        </>
    )
}

export default Navbar;