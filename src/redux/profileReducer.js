const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const SET_PROFILE = 'SET-PROFILE'

const addPost = (stateCopy) =>{
    let newPost = {
        d: 5,
        message: stateCopy.newTextPost,
        likesCount: 0,
    }
    stateCopy.PostData.push(newPost)
    stateCopy.newTextPost = ''
}
const updateNewPostText = (stateCopy, newText) => {
    stateCopy.newTextPost = newText
}

let initialState = {
    PostData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It\'s my first post!!', likesCount: 12},
    ],
    newTextPost: 'it-kamasutra',
    profile: null
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state, PostData: [...state.PostData]}
            addPost(stateCopy)
            return stateCopy
        }
        case UPDATE_NEW_POST: {
            let stateCopy = {...state}
            updateNewPostText(stateCopy, action.newTextPost)
            return stateCopy
        }
        case SET_PROFILE : {
            return{
                ...state,
                profile: {...action.profile}
            }
        }
        default : {
            return state
        }
    }
}


export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostCreator = (text) => ({type: UPDATE_NEW_POST, newTextPost: text})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})