import React from 'react';
import { startLogin, setLoginError } from '../actions/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import resources from '#resources#';
const loginErrors = resources.errors.loginErrors;

const loginResources = resources.login;

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.loginButtonRef = React.createRef();
        this.loginBodyRef = React.createRef();
        this.inputEmailRef = React.createRef();
        this.inputPasswordRef = React.createRef();
    }
    componentDidMount() {
        this.props.setLoginError(undefined);
        console.log(this.loginBodyRef);
        console.log(this.loginButtonRef);
        console.log(this.inputEmailRef);
        console.log(this.inputPasswordRef);

        this.loginBodyRef.current.addEventListener("keyup", (e) => {
            if (e.keyCode === 13) {
                e.preventDefault();
                this.loginButtonRef.current.click();
            }
        });
    }
    handleLogin = (e) => {
        e.stopPropagation();
        const email = this.inputEmailRef.current.value;
        const password = this.inputPasswordRef.current.value;
        if (!email || !password) {
            this.props.setLoginError(loginErrors.emailOrPasswordMissing);
        } else {
            startLogin(email, password);
        }
    }
    render() {
        return (
            <div>
                <div className='login__body__wrapper' ref={this.loginBodyRef}>
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
                                    <input id='login-input-email' placeholder={loginResources.email} ref={this.inputEmailRef} />
                                    <input id='login-input-password' type='password' placeholder={loginResources.password} ref={this.inputPasswordRef} />
                                    <span className='login-error-and-button__wrapper'>
                                        <button id='login-button' onClick={this.handleLogin} ref={this.loginButtonRef}>{loginResources.login}</button>
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