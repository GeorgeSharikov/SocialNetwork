import React from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from 'yup'
import {useDispatch} from "react-redux";
import {TextError} from "../common/TextError";
import {addMessageCreator} from "../../redux/dialogsReducer";
import classes from './Dialogs.module.css'

export const AddMessageForm = (props) => {
    const dispatch = useDispatch()
    const addMessage = (message) => {
        dispatch(addMessageCreator(message))
    }

    const onSubmit = (values, {resetForm}) => {
        addMessage(values.message)
        resetForm()
    }
    return (
        <div className={classes.form}>
            <Formik initialValues={{message: ''}}
                    ValidationSchema={yup.object({message: yup.string().required('Required')})}
                    onSubmit={onSubmit}>
                {
                    formik => <Form>
                        <Field placeholder={'Enter your message'} name={'message'} as={'textarea'}/>
                        <ErrorMessage name={'message'} component={TextError}/>
                        <button type={'submit'}>Send Message</button>
                    </Form>
                }
            </Formik>
        </div>

    )
}
