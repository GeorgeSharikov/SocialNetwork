import React from 'react'
import {connect} from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
    return {
        navBar: state.navBar
    }
}

const NavBarContainer = connect(mapStateToProps)(Navbar)

export default NavBarContainer