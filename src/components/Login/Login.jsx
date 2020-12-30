import { Field, reduxForm } from 'redux-form'

import React from 'react';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'login'}
                    placeholder={'Login'}
                    component={"input"}
                />
            </div>
            <div>
                <Field
                    name={'password'}
                    placeholder={'Password'}
                    component={"input"}
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
        console.log('FORM_DATA: ', formData);
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export default Login;
