import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {AddPostForm} from "./Post/AddPostForm";
import { useSelector} from "react-redux";

export const MyPosts = (props) => {
    const postData = useSelector(state => state.profilePage.PostData)
    let PostData = postData.map((p, index) => < Post key={index} message={p.message} likesCounter={p.likesCount}/>)

    return (
        <div className={classes.postsBlock}>
           <AddPostForm />
            <div className={classes.posts}>
                {PostData}
            </div>
        </div>)
}

