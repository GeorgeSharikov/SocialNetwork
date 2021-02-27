import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {getHeader} from "../../redux/authReducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getHeader()
    }

    render() {

        return <Header login={this.props.login} isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export const HeaderContainerConnect = connect(mapStateToProps, {getHeader})(HeaderContainer)