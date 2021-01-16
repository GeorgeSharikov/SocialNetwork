import React from 'react'
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    let Dialogs = props.DialogsData.map(d => <DialogsItem  key={d.id} name={d.name} id={d.id} img={d.img}/>)
    let Messages = props.MessageData.map(m => <Message key={m.id} message={m.message}/>)
    let newTextMessage = props.newTextMessage

    let sendMessage = () => {
        props.addMessage()
    }
    let changeMessage = (event) => {
        let message = event.target.value
        props.updateNewTextMessage(message)
    }



    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {Dialogs}
            </div>
            <div className={classes.messages}>
                {Messages}
                <div className={classes.textarea}>
                    <textarea  placeholder ='Enter your message' onChange={changeMessage}  value={newTextMessage}/>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs