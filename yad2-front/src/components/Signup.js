import React from 'react';
import { startSignup, setSignupError } from '../actions/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import resources from '#resources#';
const signupResources = resources.signup;

class Signup extends React.Component {
    componentDidMount() {
        this.props.setSignupError(undefined);
        document.getElementsByClassName("signup__body__wrapper")[0].addEventListener("keyup", (e) => {
            if (e.keyCode === 13) {
                e.preventDefault();
                document.getElementById("signup-button").click();
            }
        });
    }
    handleCreateAccount = (e) => {
        e.stopPropagation();
        const email = document.getElementById('signup-input-email').value;
        const password = document.getElementById('signup-input-password').value;
        const phone = document.getElementById('signup-input-phone').value;
        const name = document.getElementById('signup-input-name').value;
        startSignup({ email, password, phone, name });
    }
    render() {
        return (
            <div>
                <div className='signup__body__wrapper'>
                    <div className='signup__body'>
                        <div className='signup__box'>
                            <div className='signup__box__body'>

                                <div className='signup__box__inputs'>
                                    <p className='signup__header'>
                                        <span>
                                            {signupResources.header}
                                        </span>
                                        <Link to={'/login'} className='react-link'>
                                            <span className='react-link-login'>
                                                {signupResources.loginLink}
                                            </span>
                                        </Link>
                                    </p>
                                    <input id='signup-input-email' placeholder={signupResources.email} />
                                    <input id='signup-input-password' type='password' placeholder={signupResources.password} />
                                    <input id='signup-input-name' placeholder={signupResources.name} />
                                    <input id='signup-input-phone' placeholder={signupResources.phone} />
                                    <span className='signup-error'>
                                        {this.props.signupError}
                                    </span>
                                </div>
                            </div>
                            <div id='signup-button' className='signup-button' onClick={this.handleCreateAccount}>
                                {signupResources.signup}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    signupError: state.auth.signupError
})
const mapDispatchToProps = (dispatch) => ({
    setSignupError: (error) => dispatch(setSignupError(error))
});
export default connect(mapStateToProps, mapDispatchToProps)(Signup);