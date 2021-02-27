import React from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from 'yup'
import {TextError} from "../../../common/TextError";
import {useDispatch} from "react-redux";
import {addPostCreator} from "../../../../redux/profileReducer";

export const AddPostForm = (props) => {
    const dispatch = useDispatch()

    const addPost = (newTextPost) => dispatch(addPostCreator(newTextPost))

    const onSubmit = (values, {resetForm}) => {
        addPost(values.post)
        resetForm()
    }
    return(
        <Formik initialValues={{post: ''}}
                ValidationSchema={yup.object({post: yup.string().required('Required')})}
                onSubmit={onSubmit}>
            {
                formik => <Form>
                    <label htmlFor={'post'}>Add post</label>
                    <Field as={'textarea'} name={'post'}/>
                    <ErrorMessage name={'post'} component={TextError}/>
                    <button type={'submit'}>Add Post</button>
                </Form>
            }
        </Formik>
    )
}