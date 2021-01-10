import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let PostData = props.PostData.map(p => < Post key={p.id} message={p.message} likesCounter={p.likesCount}/>)
    let newTextPost = props.newTextPost

    let addPost = () => {
        props.addPost()
    }
    let postChanging = (event) => {
        let text = event.target.value
        props.updateNewTextPost(text)
    }

    return (
        <div className={classes.postsBlock}>
           <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={postChanging} value={newTextPost}/>
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {PostData}
            </div>
        </div>)
}

export default MyPosts