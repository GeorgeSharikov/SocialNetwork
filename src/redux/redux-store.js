import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {navBarReducer} from "./navBarReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunk from 'redux-thunk'
import {appReducer} from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    navBar: navBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store


