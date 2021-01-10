import React from 'react'
import {addMessageCreator, updateNewMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        DialogsData: state.dialogPage.DialogsData,
        MessageData: state.dialogPage.MessageData,
        newTextMessage: state.dialogPage.newTextMessage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageCreator())
        },
        updateNewTextMessage: (message) => {
            dispatch(updateNewMessageCreator(message))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer