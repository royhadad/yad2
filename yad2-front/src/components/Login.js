import React from 'react';
import { startLogin, setLoginError } from '../actions/auth';
import { connect } from 'react-redux';
import resources from '#resources#';
const loginErrors = resources.errors.loginErrors;

const loginResources = resources.login;

class Login extends React.Component {
    handleLogin = (e) => {
        e.stopPropagation();
        const email = document.getElementById('login-input-email').value;
        const password = document.getElementById('login-input-password').value;
        if (!email || !password) {
            this.props.setLoginError(loginErrors.emailOrPasswordMissing);
        } else {
            startLogin(email, password);
        }
    }
    render() {
        return (
            <div>
                <div className='login__body__wrapper'>
                    <div className='login__body'>
                        <div className='login__box'>
                            <div className='login__box__body'>

                                <div className='login__box__inputs'>
                                    <p className='login__header'>
                                        {loginResources.header}
                                    </p>
                                    <input id='login-input-email' placeholder={loginResources.email} />
                                    <input id='login-input-password' type='password' placeholder={loginResources.password} />
                                    <button onClick={this.handleLogin}>{loginResources.login}</button>
                                </div>
                            </div>
                            <div className='login__box__restore-password' onClick={(e) => alert('not implemented')}>
                                {loginResources.restorePasswordText}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    setLoginError: (error) => dispatch(setLoginError(error))
});
export default connect(undefined, mapDispatchToProps)(Login);