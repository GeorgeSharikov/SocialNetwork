import React from 'react'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.headerDesign}>
                <img src='https://yakutsk.radiostuff.ru/wa-data/public/shop/brands/31125/31125.jpg'/>
                {!props.login ? <NavLink to='/login'>Login</NavLink> : props.login}
            </div>
        </header>
    )
}

export default  Header