import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {setLoginInformation} from "../../redux/authReducer";
import * as axios from "axios";


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                this.props.setLoginInformation(id, email, login)
            }
        })
    }

    render() {

        return <Header login={this.props.login} />
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login
    }
}

export const HeaderContainerConnect = connect(mapStateToProps, {setLoginInformation})(HeaderContainer)