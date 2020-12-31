import { Field, reduxForm } from 'redux-form'
import { login, logout } from '../../redux/auth-reducer'
import { maxLengthCreator, required } from '../../utils/validators/validators';

import { Element } from '../common/FormsControls/FormsControls';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const MAX_LENGTH = 50;

const maxLength = maxLengthCreator(MAX_LENGTH);
const Input = Element("input");

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'email'}
                    placeholder={'Email'}
                    component={Input}
                    validate={[required, maxLength]}
                />
            </div>
            <div>
                <Field
                    name={'password'}
                    placeholder={'Password'}
                    type={'password'}
                    component={Input}
                    validate={[required, maxLength]}
                />
            </div>
            <div>
                <Field
                    name={'rememberMe'}
                    component={"input"}
                    type={'checkbox'}
                />
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { login })(Login);
