import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators/validators';

import { Element } from '../common/FormsControls/FormsControls';
import React from 'react';

const maxLength50 = maxLengthCreator(50);
const Input = Element("input");
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'login'}
                    placeholder={'Login'}
                    component={Input}
                    validate={[required, maxLength50]}
                />
            </div>
            <div>
                <Field
                    name={'password'}
                    placeholder={'Password'}
                    component={Input}
                    validate={[required, maxLength50]}
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
