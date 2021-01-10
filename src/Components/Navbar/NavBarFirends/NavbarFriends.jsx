import React from 'react'
import classes from './../Navbar.module.css'



const NavBarfriends = (props) => {
    return (
        <div className={classes.navBarFriend}>
            <div> <img src={props.img}/></div>
            <div> {props.name}</div>
        </div>
    )
}

export default NavBarfriends