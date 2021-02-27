import React from 'react'
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {useSelector} from "react-redux";
import {AddMessageForm} from "./AddMessageForm";
import {useAuthRedirect} from "../CustomHooks/useAuthRedirect";

const Dialogs = (props) => {
    useAuthRedirect()

    const DialogsData = useSelector(state => state.dialogPage.DialogsData)
    const MessageData = useSelector(state => state.dialogPage.MessageData)

    let Dialogs = DialogsData.map(d => <DialogsItem  key={d.id} name={d.name} id={d.id} img={d.img}/>)
    let Messages = MessageData.map(m => <Message key={m.id} message={m.message}/>)


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {Dialogs}
            </div>
            <div className={classes.messages}>
                <div>{Messages}</div>
                <AddMessageForm />
            </div>
        </div>
    )
}

export default Dialogs