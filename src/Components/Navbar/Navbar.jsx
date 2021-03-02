import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import NavBarItem from "./NavBarItem/NavbarItem";
import NavBarfriends from "./NavBarFirends/NavbarFriends";
import {useSelector} from "react-redux";
import {getNavBar} from "../common/selectrors";


export const Navbar = (props) => {
    let state = useSelector(state => getNavBar(state))
    let navLink = state.navBarItem.map(item => <NavBarItem path={item.path} key={item.id} text={item.text}/>)
    let friend = state.navBarFriends.map(item => <NavBarfriends name={item.name} key={item.id} img={item.img}/>)
    return (
        <nav className={classes.nav}>
            {navLink}
            <div className={classes.item}>
                <div className={classes.findUsers}>
                    <NavLink to={"/users"} activeClassName={classes.activeLink}>Find users</NavLink>
                </div>
                <div className={classes.item_friends}>
                    <NavLink to="/friends" activeClassName={classes.activeLink}><h1 className={classes.h1}>Friends</h1></NavLink>
                    <div className={classes.friendItem}>
                        {friend}
                    </div>
                </div>
            </div>

        </nav>
    )
}

