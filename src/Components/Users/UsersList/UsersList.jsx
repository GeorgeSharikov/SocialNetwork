import React from 'react'
import classes from './UsersList.module.css'
import userPhoto from "../../../Assets/images/user.png";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {follow, unfollow} from "../../../redux/usersReducer";
import {getFollowProgress} from "../../common/selectrors";

const UsersList = (props) => {
    const dispatch = useDispatch()

    const followProgress = useSelector(state => getFollowProgress(state))

    const following = (id) => {
        dispatch(follow(id))
    }

    const unFollowing = (id) => {
        dispatch(unfollow(id))
    }

    return (
            <div>
                <div className={classes.wrapper}>
                        <span className={classes.img} >
                            <NavLink to={`/profile/${props.item.id}`}>
                                <img src={props.item.photos.small != null ? props.item.photos.small : userPhoto}/>
                            </NavLink>
                            <div > {props.item.followed
                                ? <button disabled={followProgress.some(id => id === props.item.id)} onClick={() => unFollowing(props.item.id)}>UnFollow</button>
                                : <button disabled={followProgress.some(id => id === props.item.id)} onClick={() => following(props.item.id)}>Follow</button>
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