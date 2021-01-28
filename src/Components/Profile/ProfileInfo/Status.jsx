import React, {useEffect, useState} from 'react'



const ProfileStatus = (props) => {

    const [state, setState] = useState({
        editMode: false,
        status: props.status
    })

    useEffect(() => {
            setState({
            ...state,
            status: props.status})
    }, [props.status])

    const activateEditMode = () => {
        setState({
            ...state,
            editMode: true
        })
    }

    const deactivateEditMode = () => {
        debugger
        setState({
            ...state,
            editMode: false
        })
        props.updateUserStatus(state.status)
    }

    const changeStatus = (e) => {
        console.log(2)
        setState({
            ...state,
            status: e.currentTarget.value
        })
    }


    return (
        <div>
            {!state.editMode ? <div>
                    <span onDoubleClick={activateEditMode}>{props.status ? props.status : 'noStatus'}</span>
                </div>
                : <div>
                    <input onChange={changeStatus} autoFocus={true} onBlur={deactivateEditMode} value={state.status}/>
                </div>}
        </div>
    )
}


export default ProfileStatus