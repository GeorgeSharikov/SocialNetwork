import React from 'react'
import classes from './../Navbar.module.css'
import {NavLink} from "react-router-dom";

const NavBarItem = (props) => {
    return (
        <div className={classes.item}>
            <NavLink to={props.path} activeClassName={classes.activeLink}>{props.text}</NavLink>
        </div>
    )
}

export default NavBarItem