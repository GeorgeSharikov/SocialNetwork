import React from 'react'
import classes from '../../Login/Login.module.css'

export const TextError = (props) => {
    return(
        <div className={classes.error}>
            {props.children}
        </div>
    )
}

