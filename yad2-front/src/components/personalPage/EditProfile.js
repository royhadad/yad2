import React from 'react';
import { connect } from 'react-redux';
import PersonalPage from './PersonalPage';
import { deleteUser } from '../../actions/auth';
import { SignupBox } from '../Signup';
import { fetchUser } from '../../selectors/users';
import ReactLoading from 'react-loading';
import resources from '#resources#';
const editProfileResources = resources.personalPage.editProfile;

class EditProfile extends React.Component {
    state = {
        user: {},
        isLoading: true
    }
    async componentDidMount() {
        const user = await fetchUser();
        if (user) {
            this.setState((prevState) => ({ user, isLoading: false }));
        }
    }

    render() {
        return (
            <div className='edit-profile__wrapper'>
                <h1>{editProfileResources.header}</h1>
                {
                    this.state.isLoading ? (
                        <ReactLoading type='bubbles' color='#ff7100' width={256} height={256} />
                    ) : (
                            <SignupBox
                                isUpdate={true}
                                createButtonText={editProfileResources.updateButton}
                                shouldShowHeader={false}
                                defaultEmail={this.state.user.email}
                                passwordPlaceholder={editProfileResources.passwordPlaceholder}
                                defaultName={this.state.user.name}
                                defaultPhone={this.state.user.phone}
                            />
                        )
                }
                <div className='delete-account-button' onClick={() => deleteUser(this.state.user)}>{editProfileResources.deleteProfilebutton}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({

})
const Body = connect(mapStateToProps, mapDispatchToProps)(EditProfile);
export default () => (<PersonalPage childComponent={Body} selected={'me'} />);