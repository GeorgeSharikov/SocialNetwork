import React, {useEffect} from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {Redirect , useRouteMatch, useHistory } from "react-router-dom";
import {useAuthRedirect} from "../CustomHooks/useAuthRedirect";
import {useDispatch, useSelector} from "react-redux";
import {getAthraizedUserId, getProfileSelector, getStatusSelector} from "../common/selectrors";
import {getProfile, getUserStatus} from "../../redux/profileReducer";


export const Profile = (props) => {
    const dispatch = useDispatch()
    const match = useRouteMatch()
    const history = useHistory()
    useEffect(() => {
        let userId = match.params.userId
        if(!userId){
            userId = authraizedUserId
            if(!userId){
                history.push('/login')
            }
        }
        dispatch(getProfile(userId))
        dispatch(getUserStatus(userId))
    }, [match, history])

    const profile = useSelector(state => getProfileSelector(state))
    const status = useSelector(state => getStatusSelector(state))
    const authraizedUserId = useSelector(state => getAthraizedUserId(state))

    const isAuth = useAuthRedirect()
    if(!isAuth){
        return  <Redirect to={'/login'} />
    }
    return (
        <div>
            <ProfileInfo profile={profile} status={status} />
            <MyPosts />
        </div>
    )
}
