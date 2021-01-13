import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
             userId = 2
        }
        this.props.getProfile(userId)
    }

    render(){
        debugger
        return (

                <Profile profile={this.props.profile}/>
        )
    }
}


export const UrlDataComponent = withRouter(ProfileContainer)

let mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile
    }
}


export default connect(mapStateToProps, {getProfile})(UrlDataComponent)