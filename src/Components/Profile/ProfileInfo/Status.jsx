import React, {useEffect, useState} from 'react'
import {updateUserStatus} from "../../../redux/profileReducer";
import {useDispatch} from "react-redux";



const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false,)
    const [status, setStatus] = useState(props.status)
    const dispatch = useDispatch()

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        debugger
        setEditMode( false)
        dispatch(updateUserStatus(status))
    }

    const changeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {!editMode ? <div>
                    <span onDoubleClick={activateEditMode}>{props.status ? props.status : 'noStatus'}</span>
                </div>
                : <div>
                    <input onChange={changeStatus} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                </div>}
        </div>
    )
}


export default ProfileStatus