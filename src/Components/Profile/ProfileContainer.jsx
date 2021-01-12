import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profileReducer";
import * as axios from "axios";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
             userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setProfile(response.data)
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