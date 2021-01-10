import React from 'react'
import classes from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={classes.dialog }>
            <img src={props.img}/>
            <NavLink to={path} activeClassName={classes.activeLink}> {props.name} </NavLink>
        </div>
    )
}


export default DialogsItem