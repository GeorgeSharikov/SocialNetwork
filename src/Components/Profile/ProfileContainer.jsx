import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {apiProfile} from "../../api/api";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
             userId = 2
        }
        apiProfile.getProfile(userId)
            .then(response => {
                this.props.setProfile(response)
            })
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


export default connect(mapStateToProps, {setProfile})(UrlDataComponent)