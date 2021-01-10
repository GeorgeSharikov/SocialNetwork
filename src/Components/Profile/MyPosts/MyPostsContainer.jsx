import React from 'react'
import {addPostCreator, updateNewPostCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        PostData: state.profilePage.PostData,
        newTextPost: state.profilePage.newTextPost
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addPost: () => {
            dispatch(addPostCreator())
        },
        updateNewTextPost: (text) => {
            dispatch(updateNewPostCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer