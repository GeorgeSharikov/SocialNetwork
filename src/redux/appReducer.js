import React from "react";
import {getHeader} from "./authReducer";

const SET_INITIALIZATION = 'SET_INITIALIZATION'

let initialState = {
    isInitialization: false,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZATION: {
            return{
                ...state,
                isInitialization: true
            }

        }
        default: {
            return state
        }
    }
}


    export const setInitialization = () => ({type: SET_INITIALIZATION})

export const appInitialize = () => (dispatch) => {
   dispatch(getHeader())
        .then(() => dispatch(setInitialization()))
}

