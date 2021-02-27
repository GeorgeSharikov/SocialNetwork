import React from 'react'
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    setState,
    setUserTotalCount, toggleFollowing,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader";
import {withAuthRedirect} from "../CustomHooks/useAuthRedirect";
import {compose} from "redux";

class UsersContainerComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
        this.props.setCurrentPage(pageNumber)
    }

    follow = (id) => {
        this.props.follow(id)
    }

    unfollow = (id) => {
        this.props.unfollow(id)
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


export const UsersContainer = compose(
    // withAuthRedirect,
    connect(mapStateToProps,
        { setState, setCurrentPage, setUserTotalCount, toggleIsFetching, toggleFollowing, getUsers, follow, unfollow })
)(UsersContainerComponent)
