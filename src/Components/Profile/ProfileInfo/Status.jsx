import React, {useEffect, useState} from 'react'



const ProfileStatus = (props) => {

    const [state, setState] = useState({
        editMode: false,
        status: props.status
    })

    useEffect(() => {
            setState(prevState => {
                if(prevState.status !== state.status) return {...prevState, status: props.status}
                return prevState
            })
    }, [state.status])

    const activateEditMode = () => {
        setState({
            ...state,
            editMode: true
        })
    }

    const deactivateEditMode = () => {
        setState({
            ...state,
            editMode: false
        })
        props.updateUserStatus(state.status)
    }

    const changeStatus = (e) => {
        setState({
            ...state,
            status: e.currentTarget.value
        })
    }


    return (
        <div>
            {!state.editMode ? <div>
                    <span onDoubleClick={activateEditMode}>{!props.status ? 'noStatus' : props.status}</span>
                </div>
                : <div>
                    <input onChange={changeStatus} autoFocus={true} onBlur={deactivateEditMode} value={state.status}/>
                </div>}
        </div>
    )
}


export default ProfileStatus