import React from 'react';
import { startLogin, setLoginError } from '../actions/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import resources from '#resources#';
const loginErrors = resources.errors.loginErrors;

const loginResources = resources.login;

class Login extends React.Component {
    componentDidMount() {
        this.props.setLoginError(undefined);
        document.getElementsByClassName("login__body__wrapper")[0].addEventListener("keyup", (e) => {
            if (e.keyCode === 13) {
                e.preventDefault();
                document.getElementById("login-button").click();
            }
        });
    }
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
                            {
                                this.props.loginTopMsg && (
                                    <p className='top-message'>{this.props.loginTopMsg}</p>
                                )
                            }
                            <div className='login__box__body'>

                                <div className='login__box__inputs'>
                                    <p className='login__header'>
                                        <span>
                                            {loginResources.header}
                                        </span>
                                        <Link to={'/signup'} className='react-link'>
                                            <span className='react-link-signup'>
                                                {loginResources.signupLink}
                                            </span>
                                        </Link>
                                    </p>
                                    <input id='login-input-email' placeholder={loginResources.email} />
                                    <input id='login-input-password' type='password' placeholder={loginResources.password} />
                                    <span className='login-error-and-button__wrapper'>
                                        <button id='login-button' onClick={this.handleLogin}>{loginResources.login}</button>
                                        <span className='login-error'>{this.props.loginError}</span>
                                    </span>
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
const mapStateToProps = (state) => ({
    loginError: state.auth.loginError,
    loginTopMsg: state.auth.loginTopMsg
})
const mapDispatchToProps = (dispatch) => ({
    setLoginError: (error) => dispatch(setLoginError(error))
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);