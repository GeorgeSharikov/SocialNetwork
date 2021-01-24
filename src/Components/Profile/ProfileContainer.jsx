import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";



class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
             userId = 13962
        }
        this.props.getProfile(userId)
        this.props.getUserStatus(userId)
    }

    render(){
        return (
                <Profile profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}

let mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    // withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus })
)(ProfileContainer)