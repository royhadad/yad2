import React from 'react';
import { startSignup, setSignupError, updateUser } from '../actions/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import resources from '#resources#';
const signupResources = resources.signup;


//props:
//createButtonText: string
//shouldShowHeader: bool
class SignupBoxWithoutState extends React.Component {
    componentDidMount() {
        this.props.setSignupError(undefined);
        document.getElementsByClassName("signup__box")[0].addEventListener("keyup", (e) => {
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
        if (this.props.isUpdate) {
            updateUser({ email, password, phone, name });
        } else {
            startSignup({ email, password, phone, name });
        }
    }
    render() {
        return (
            <div className='signup__box'>
                <div className='signup__box__body'>
                    <div className='signup__box__inputs'>
                        {this.props.shouldShowHeader && (
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
                        )}
                        <input id='signup-input-email' placeholder={signupResources.email} defaultValue={this.props.defaultEmail} />
                        <input id='signup-input-password' type='password' placeholder={this.props.passwordPlaceholder} />
                        <input id='signup-input-name' placeholder={signupResources.name} defaultValue={this.props.defaultName} />
                        <input id='signup-input-phone' placeholder={signupResources.phone} defaultValue={this.props.defaultPhone} />
                        <span className='signup-error' style={(this.props.signupError === resources.personalPage.editProfile.updatedSuccessfully) ? { color: 'green' } : {}}>
                            {this.props.signupError}
                        </span>
                    </div>
                </div>
                <div id='signup-button' className='signup-button' onClick={this.handleCreateAccount}>
                    {this.props.createButtonText}
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
const SignupBox = connect(mapStateToProps, mapDispatchToProps)(SignupBoxWithoutState);

class Signup extends React.Component {
    render() {
        return (
            <div>
                <div className='signup__body__wrapper'>
                    <div className='signup__body'>
                        <SignupBox
                            isUpdate={false}
                            createButtonText={signupResources.signup}
                            shouldShowHeader={true}
                            passwordPlaceholder={signupResources.password}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export { SignupBox };
export default Signup;