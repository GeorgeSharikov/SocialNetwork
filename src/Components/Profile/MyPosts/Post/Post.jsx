import React from 'react'
import classes from './Post.module.css'


const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://i.pinimg.com/736x/38/07/45/3807452de810352bca9c0587863ebece--avatar-film-nerd.jpg"/>
            {props.message}
            <div>
                <span>like</span>{props.likesCounter}
            </div>

        </div>
    )
}

export default Post