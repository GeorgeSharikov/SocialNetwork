import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setState,
    setUserTotalCount,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader";

class UsersContainerComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,{
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setState(response.data.items)
                this.props.setUserTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setState(response.data.items)
            })
        this.props.setCurrentPage(pageNumber)
    }

    follow = (id) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {},{
            withCredentials: true,
            headers: {
                'API-KEY': 'eb5c9bee-b1cd-4d71-b3f7-42c2cc5a9c0b'
            }
        })
            .then(response => {
                if(response.data.resultCode === 0){
                    this.props.follow(id)
                }
            })
    }

    unfollow = (id) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{
            withCredentials: true,
            headers: {
                'API-KEY': 'eb5c9bee-b1cd-4d71-b3f7-42c2cc5a9c0b'
            }
        })
            .then(response => {
                if(response.data.resultCode === 0){
                    this.props.unfollow(id)
                }
            })
    }


    render()

    {
        return <>

            {this.props.isLoader ? <Preloader/> : null}
            <Users  currentPage={this.props.currentPage}
                   users={this.props.users}
                   totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   unfollow={this.unfollow}
                   follow={this.follow}
                   onPageChanged={this.onPageChanged}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUserCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoader: state.usersPage.isFetching
    }
}
export const UsersContainer = connect(mapStateToProps,
    {follow, unfollow, setState, setCurrentPage, setUserTotalCount, toggleIsFetching,})
(UsersContainerComponent)
