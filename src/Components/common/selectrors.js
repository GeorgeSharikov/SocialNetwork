import {createSelector} from "reselect";

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getUsersSelector = (state) => {
    return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsersSelector, (users) => {

    return users.filter(i => true)
})

export const getTotalUserCount = (state) => {
    return state.usersPage.totalUserCount
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getIsLoader = (state) => {
    return state.usersPage.isFetching
}

export const getFollowProgress = (state) => {
    return state.usersPage.followProgress
}

export const getProfileSelector = (state) => {
    return state.profilePage.profile
}

export const getStatusSelector = (state) => {
    return state.profilePage.status
}

export const getAthraizedUserId = state => {
    return state.auth.id
}

export const getNavBar = state => {
    return state.navBar
}