import React from 'react'
import classes from './Header.module.css'
import {NavLink, Redirect} from "react-router-dom";
import {LogOut} from "../../redux/authReducer";
import {useDispatch, useSelector} from "react-redux";


export const Header = (props) => {
    const dispatch = useDispatch()
    const login = useSelector(state => state.auth.login)
    const isAuth = useSelector(state => state.auth.isAuth)

    const logOut = () => {
        dispatch(LogOut())
    }

    return (
        <header className={classes.header}>
            <div className={classes.headerDesign}>
                <img src='https://yakutsk.radiostuff.ru/wa-data/public/shop/brands/31125/31125.jpg'/>
                {!isAuth ? <NavLink to='/login'>Login</NavLink> : <p>
                    {login}
                     <button onClick={logOut}>Log Out</button>
                </p>}
            </div>
        </header>
    )
}

