import React from 'react'
import classes from './Users.module.css'
import UsersList from "./UsersList/UsersList";

const Users = (props) => {

    let pagesCount = Math.ceil((props.totalUserCount-8800) / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {
                pages.map(p => {
                return <span onClick={() => props.onPageChanged(p)} className={props.currentPage === p && classes.active}>{p}</span>})
            }
        </div>

        {props.users.map(i => <UsersList item={i}
                                         unfollow={props.unfollow}
                                         follow={props.follow}
                                         toggleFollowing={props.toggleFollowing}
                                         followProgress={props.followProgress}/>)}
    </div>
}

export default Users