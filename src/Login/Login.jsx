import React, {useState} from 'react'
import classes from './Login.module.css'
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from 'yup'
import {useDispatch, useSelector} from "react-redux";
import {logIn} from "../redux/authReducer";
import {TextError} from "../Components/common/TextError";
import {Redirect} from "react-router-dom";
import {useAuthRedirect} from "../Components/CustomHooks/useAuthRedirect";

const captcha = false

const initialValues = {
    email: '',
    password: '',
    rememberMe: false
}
const validationSchema = yup.object({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().required('Required'),
    rememberMe: yup.string()
})

const LoginForm = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth )
    const withError = useSelector(state => state.auth.errorText)

    const onSubmit = values => {
        const {email, password, rememberMe} = values
        dispatch(logIn(email, password, rememberMe, captcha))
        if(isAuth) {
            return <Redirect to={'/profile'}/>
        } return null

    }
    return <div className={classes.container}>
        {withError ? <div className={classes.serverError}><TextError>{withError}</TextError></div> : null}
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => <Form>
                    <div className={classes.field}>
                        <label htmlFor={'email'}>Email</label>
                        <Field name={'email'} type={'email'}/>
                        <ErrorMessage name={'email'} component={TextError}/>
                    </div>
                    <div className={classes.field}>
                        <label htmlFor={'password'}>Password</label>
                        <Field name={'password'} type={'password'}/>
                        <ErrorMessage name={'password'} component={TextError}/>
                    </div>
                    <div className={classes.rememberMe}>
                        <Field name={'rememberMe'} type={'checkbox'}/>
                        <label>Remember me</label>
                        <ErrorMessage name={'rememberMe'} component={TextError}/>
                    </div>
                    <button type={'submit'} >Login</button>
                </Form>
            }
        </Formik>
    </div>
}


const Login = () => {
    const isAuth = useAuthRedirect()
    if(isAuth){
        return  <Redirect to={'/profile'} />
    }
    return <LoginForm/>
}

export default Login