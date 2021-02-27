import React from 'react'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {LogOut} from "../../redux/authReducer";
import {useDispatch} from "react-redux";


const Header = (props) => {
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(LogOut())
    }
    return (
        <header className={classes.header}>
            <div className={classes.headerDesign}>
                <img src='https://yakutsk.radiostuff.ru/wa-data/public/shop/brands/31125/31125.jpg'/>
                {!props.isAuth ? <NavLink to='/login'>Login</NavLink> : <p>
                    {props.login}
                     <button onClick={logOut}>Log Out</button>
                </p>}
            </div>
        </header>
    )
}

export default  Header