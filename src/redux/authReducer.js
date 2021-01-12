const SET_LOGIN_INFORMATION = 'SET_LOGIN_INFORMATION-POST'

let initialState = {
        id: null,
        email: null,
        login: null

}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_INFORMATION: {
            return{
                ...state,
                ...action.data
            }
        }
        default: {
            return state
        }
    }
}


export const setLoginInformation = (id, email, login) => ({type: SET_LOGIN_INFORMATION, data: {id, email, login}})
