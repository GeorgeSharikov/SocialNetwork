import {apiHeader} from "../api/api";
import {Redirect} from "react-router-dom";
import React from "react";

const SET_LOGIN_INFORMATION = 'SET_LOGIN_INFORMATION-POST'
const SET_LOGIN = 'SET_LOGIN'
const SET_LOGOUT = 'SET_LOGOUT'

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
        case SET_LOGIN: {
            return {
                ...state,
                isAuth: true
            }
        }
        case SET_LOGOUT: {
            return {
                ...state,
                isAuth: false
            }
        }
        default: {
            return state
        }
    }
}


export const setLoginInformation = (id, email, login) => ({type: SET_LOGIN_INFORMATION, data: {id, email, login}})
export const setLogin = () => ({type: SET_LOGIN})
export const setLogOut = () => ({type: SET_LOGOUT})

export const  getHeader = () => (dispatch) => {
        apiHeader.getHeader()
        .then(response => {
            if (response.resultCode === 0) {
                let {id, email, login} = response.data
                dispatch(setLoginInformation(id, email, login))
            }
        })
}

export const logIn = (email, password, rememberMe) => (dispatch) => {
    apiHeader.logIn(email, password, rememberMe)
        .then(response => {
            if(response.resultCode === 0){
                console.log('Good')
                dispatch(setLogin())
            }else{
                alert('Nope')
            }
        })
}

export const LogOut = () => (dispatch) => {
    apiHeader.logOut()
        .then(response => {
            if(response.resultCode === 0){
                dispatch(setLogOut())
            }else{
                alert('Nope')
            }
        })
}