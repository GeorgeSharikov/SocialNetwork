import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {



    return (
        <di>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer   />
        </di>
    )
}

export default Profile