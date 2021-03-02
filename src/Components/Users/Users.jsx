import React, {useEffect} from 'react'
import classes from './Users.module.css'
import UsersList from "./UsersList/UsersList";
import {useDispatch, useSelector} from "react-redux";
import { setCurrentPage, getUsers} from "../../redux/usersReducer";
import Preloader from "../common/preloader";
import {
    getCurrentPage,
    getIsLoader,
    getPageSize,
    getTotalUserCount,
    getUsersSuperSelector
} from "../common/selectrors";

export const Users = (props) => {
    const dispatch = useDispatch()

    const currentPage = useSelector(state => getCurrentPage(state))
    const users = useSelector(state => getUsersSuperSelector(state))
    const totalUserCount = useSelector(state => getTotalUserCount(state))
    const pageSize = useSelector(state => getPageSize(state))
    const isLoader = useSelector(state => getIsLoader(state))

    useEffect(() => {
        dispatch(getUsers(pageSize, currentPage))
    },[])
    const onPageChanged = (pageNumber) => {
        dispatch(getUsers(pageSize, currentPage))
        dispatch(setCurrentPage(pageNumber))
    }

    let pagesCount = Math.ceil((totalUserCount-10100) / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    if(isLoader){
       return <Preloader />
    }
    return <div>
        <div>
            {
                pages.map((p, index) => {
                return <span key={index} onClick={() => onPageChanged(p)} className={currentPage === p && classes.active}>{p}</span>})
            }
        </div>

        {users.map((i, index) => <UsersList key={index}item={i}/>)}
    </div>
}

