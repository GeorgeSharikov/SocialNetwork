import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {navBarReducer} from "./navBarReducer";
import {usersReducer} from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    navBar: navBarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)

window.store = store

export default store


