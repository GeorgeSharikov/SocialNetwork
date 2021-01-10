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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setState(response.data.items)
                this.props.setUserTotalCount(response.data.totalCount)

            })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setState(response.data.items)
            })
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            { this.props.isLoader? <Preloader/> : null}
            <Users currentPage={this.props.currentPage}
                   users={this.props.users}
                   totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   onPageChanged={this.onPageChanged}/>
        </>
    }
}

let mapStateToProps = (state) => {
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
