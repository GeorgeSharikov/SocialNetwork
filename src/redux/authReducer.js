import {apiHeader} from "../api/api";
import React from "react";

const SET_LOGIN_INFORMATION = 'SET_LOGIN_INFORMATION-POST'
const SET_ERROR = 'SET_ERROR'

let initialState = {
        id: null,
        email: null,
        login: null,
        isAuth: false,
        errorText: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_INFORMATION: {
            return{
                ...state,
                ...action.data
            }

        }
        case SET_ERROR: {
            return {
                ...state,
                errorText: action.errorText
            }
        }

        default: {
            return state
        }
    }
}


export const setLoginInformation = (id, email, login, isAuth=false) => ({type: SET_LOGIN_INFORMATION, data: {id, email, login, isAuth}})
export const setError = (errorText) => ({type: SET_ERROR, errorText})
// export const setErrorCaptcha = () => ({type: SET_ERROR_CAPTCHA,})

export const  getHeader = () => (dispatch) => {
        return apiHeader.getHeader()
        .then(response => {
            if (response.resultCode === 0) {
                let {id, email, login} = response.data
                dispatch(setLoginInformation(id, email, login, true))
            }

        })
}

export const logIn = (email, password, rememberMe) => (dispatch) => {
    apiHeader.logIn(email, password, rememberMe)
        .then(response => {
            debugger
            if(response.resultCode === 0){
                dispatch(getHeader())
                // dispatch(setErrorCaptcha())
            }else{
                console.log('aaa pizdec')
                dispatch(setError(response.messages))
            }
        })
}

export const LogOut = () => (dispatch) => {
    apiHeader.logOut()
        .then(response => {
            if(response.resultCode === 0){
                dispatch(setLoginInformation(null, null, null, false))

            }else {
                alert('Nope')
            }
        })
}