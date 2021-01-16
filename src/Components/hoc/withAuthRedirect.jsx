import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return{
        auth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {

    const WrapperComponent = (props) => {
            if(!props.auth) return <Redirect to={'/login'} />
            return  <Component {...props}/>
    }
    const withAuthRedirectComponent = connect(mapStateToPropsForRedirect)(WrapperComponent)
    return withAuthRedirectComponent

}


