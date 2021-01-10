import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/preloader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
        return (
            <div>
                <div >
                    <img src='https://sc01.alicdn.com/kf/HTB1S9dKzOCYBuNkSnaVq6AMsVXaJ.jpg'/>
                </div>
                <div  className={classes.descriptionBlock}>
                    <img src={props.profile.photos.small} className={classes.avatar}/>
                    <span>{props.profile.fullName}</span>
                    <div>Status: {props.profile.aboutMe}</div>
                    <div>Ищу ли работу: {props.profile.lookingForAJob ? 'Da' : 'No'} </div>
                    <div>Как ищу: {props.profile.lookingForAJobDescription} </div>
                    <div>Contacts: poka net</div>
                </div>
            </div>
        )
}


export default ProfileInfo