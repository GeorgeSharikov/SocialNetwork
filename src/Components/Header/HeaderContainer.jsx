import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {setLoginInformation} from "../../redux/authReducer";
import {apiHeader} from "../../api/api";


class HeaderContainer extends React.Component {

    componentDidMount() {
        apiHeader.getHeader()
            .then(response => {
            if (response.resultCode === 0) {
                let {id, email, login} = response.data
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