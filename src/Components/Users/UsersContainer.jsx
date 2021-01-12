import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setState,
    setUserTotalCount, toggleFollowing,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader";
import {apiUsers} from "../../api/api";

class UsersContainerComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        apiUsers.getUsers(this.props.pageSize, this.props.currentPage)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setState(response.items)
                this.props.setUserTotalCount(response.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        apiUsers.getUsers(this.props.pageSize, pageNumber)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setState(response.items)
            })
        this.props.setCurrentPage(pageNumber)
    }

    follow = (id) => {
        this.props.toggleFollowing(true)
        apiUsers.follow(id)
            .then(response => {
                if (response.resultCode === 0) {
                    this.props.follow(id)
                }
                this.props.toggleFollowing(false)
            })
    }

    unfollow = (id) => {
        this.props.toggleFollowing(true)
        apiUsers.unfollow(id)
            .then(response => {
                if (response.resultCode === 0) {
                    this.props.unfollow(id)
                }
                this.props.toggleFollowing(false)
            })
    }

    render() {
        return <>

            {this.props.isLoader ? <Preloader/> : null}
            <Users currentPage={this.props.currentPage}
                   users={this.props.users}
                   totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   unfollow={this.unfollow}
                   follow={this.follow}
                   onPageChanged={this.onPageChanged}
                   followProgress={this.props.followProgress}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUserCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoader: state.usersPage.isFetching,
        followProgress: state.usersPage.followProgress
    }
}
export const UsersContainer = connect(mapStateToProps,
    {follow, unfollow, setState, setCurrentPage, setUserTotalCount, toggleIsFetching, toggleFollowing})
(UsersContainerComponent)
