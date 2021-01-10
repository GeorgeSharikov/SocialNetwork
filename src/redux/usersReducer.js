const FOLLOW = 'FOLLOWAC'
const UNFOLLOW= 'UNFOLLOWAC'
const SET_STATE = 'SET_STATE'
const SET_CURRENT_VALUE = 'SET_CURRENT_VALUE'
const SET_USERS_TOTAL_COUNT = 'SET_USER_TOTAL_COUNT'
const TOGGLE_ISF_ETCHING = 'TOGGLE_IS_FETCHING'


let initialState = {
    users: [],
    totalUserCount: 21,
    pageSize: 5,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
           return{
            ...state,
               users: state.users.map(u => {
                if(u.id === action.id){
                    return {...u, followed: true}
                }else{
                    return  u
                }
            })
           }
        }
        case UNFOLLOW: {
            return{
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id){
                        return {...u, followed: false}
                    }else{
                        return  u
                    }
                })
            }
        }
        case SET_STATE: {
            return{
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_VALUE: {
            return {
             ...state,
             currentPage: action.pageNumber
            }
        }
        case SET_USERS_TOTAL_COUNT: {
            return {
                ...state,
                totalUserCount: action.totalNumber
            }
        }
        case TOGGLE_ISF_ETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default : {
            return state
        }
    }
}

export const follow= (id) => ({type: FOLLOW , id})
export const unfollow = (id) => ({type: UNFOLLOW,id})
export const setState = (users) => ({type: SET_STATE,users})
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_VALUE, pageNumber})
export const setUserTotalCount = (totalNumber) => ({type: SET_USERS_TOTAL_COUNT, totalNumber})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_ISF_ETCHING, isFetching})

