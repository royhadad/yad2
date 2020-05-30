import React from 'react';
import { connect } from 'react-redux';
import { setLoginTopMsg } from '../../actions/auth';
import { Link } from 'react-router-dom';
import resources from '#resources#';


class AddItemButton extends React.Component {
    onClick = () => {
        if (!this.props.isAuthenticated) {
            setTimeout(() => {
                this.props.setLoginTopMsg(resources.login.loginToAddItems);
            }, 0);
        }
    }
    render() {
        return (
            <div className="add-item-button__wrapper">
                <Link to='/personal/new' onClick={this.onClick} className='react-link'>
                    <div className="add-item-button">
                        {resources.header.addItemButton.text}
                    </div>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.token
});
const mapDispatchToProps = (dispatch) => ({
    setLoginTopMsg: (msg) => dispatch(setLoginTopMsg(msg))
})
export default connect(mapStateToProps, mapDispatchToProps)(AddItemButton);