import {apiProfile} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_PROFILE = 'SET-PROFILE'
const GET_STATUS = 'GET-STATUS'
const UPDATE_STATUS = 'UPDATE-STATUS'

const addPost = (stateCopy, newTextPost) =>{
    let newPost = {
        d: 5,
        message: newTextPost,
        likesCount: 0,
    }
    stateCopy.PostData.push(newPost)
}


let initialState = {
    PostData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It\'s my first post!!', likesCount: 12},
    ],
    profile: null,
    status: '',
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state, PostData: [...state.PostData]}
            addPost(stateCopy, action.newTextPost)
            return stateCopy
        }
        case SET_PROFILE : {
            return{
                ...state,
                profile: {...action.profile}
            }
        }
        case GET_STATUS : {
            return {
                ...state,
                status: action.status
            }
        }
        case UPDATE_STATUS : {
            return {
                ...state,
                status: action.status
            }
        }
        default : {
            return state
        }
    }
}


export const addPostCreator = (newTextPost) => ({type: ADD_POST, newTextPost})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const getStatus = (status) => ({type: GET_STATUS, status})
export const updateStatus = (status) => ({type: UPDATE_STATUS, status})

export const getProfile = (userId) => (dispatch) => {
    apiProfile.getProfile(userId)
        .then(response => {
            dispatch(setProfile(response))
        })
}

export const getUserStatus = (userId) => (dispatch) => {
    apiProfile.getStatus(userId)
        .then(response => {
            dispatch(getStatus(response))
        })
}

export const updateUserStatus = (status) => (dispatch) => {
    apiProfile.updateStatus(status)
        .then(response => {
            if(response.resultCode === 0) dispatch(updateStatus(status))
        })
}