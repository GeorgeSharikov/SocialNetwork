import React from 'react'
import classes from './UsersList.module.css'
import userPhoto from "../../../Assets/images/user.png";
import {NavLink} from "react-router-dom";

const UsersList = (props) => {
    return (
            <div>
                <div className={classes.wrapper}>
                        <span className={classes.img}>
                            <NavLink to={`/profile/${props.item.id}`}>
                                <img src={props.item.photos.small != null ? props.item.photos.small : userPhoto}/>
                            </NavLink>
                            <div> {props.item.followed
                                ? <button onClick={() => props.unfollow(props.item.id)}>UnFollow</button>
                                : <button onClick={() => props.follow(props.item.id)}>Follow</button>
                            }
                            </div>
                        </span>
                    <span className={classes.inf}>
                            <span>{props.item.name}</span>
                            <span>{props.item.status}</span>
                        </span>
                </div>
            </div>
    )
}

export default UsersList