import React from 'react';
import MainNavBar from '#components#/MainNavBar/MainNavBar';
import RealEstateNavBar from '#components#/RealEstateNavBar';
import RealEstatePageFooter from '#components#/footer/RealEstatePageFooter';
import { connect } from 'react-redux';
import resources from '#resources#';
const loginResources = resources.login;

class Login extends React.Component {
    render() {
        return (
            <div>
                <MainNavBar />
                <RealEstateNavBar />
                <div className='login__body__wrapper'>
                    <div className='login__body'>
                        <div className='login__box'>
                            <div className='login__box__body'>

                                <div className='login__box__inputs'>
                                    <p className='login__header'>
                                        {loginResources.header}
                                    </p>
                                    <input placeholder={loginResources.email} />
                                    <input type='password' placeholder={loginResources.password} />
                                    <button>{loginResources.login}</button>
                                </div>
                            </div>
                            <div className='login__box__restore-password' onClick={(e) => alert('not implemented')}>
                                {loginResources.restorePasswordText}
                            </div>
                        </div>
                    </div>
                </div>
                <RealEstatePageFooter />
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({});
export default connect(undefined, mapDispatchToProps)(Login);