import {apiHeader} from "../api/api";

const SET_LOGIN_INFORMATION = 'SET_LOGIN_INFORMATION-POST'

let initialState = {
        id: null,
        email: null,
        login: null,
        isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_INFORMATION: {
            return{
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default: {
            return state
        }
    }
}


export const setLoginInformation = (id, email, login) => ({type: SET_LOGIN_INFORMATION, data: {id, email, login}})

export  const  getHeader = () => (dispatch) => {
        apiHeader.getHeader()
        .then(response => {
            if (response.resultCode === 0) {
                let {id, email, login} = response.data
                dispatch(setLoginInformation(id, email, login))
            }
        })
}