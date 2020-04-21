import React from 'react';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import resources from '#resources#';
const navBarResources = resources.personalPage.navBar;

const selectedClass = '-selected';

class PersonalPageNavBar extends React.Component {
    render() {
        return (
            <div className='personal-page-nav-bar__wrapper'>
                <div className='personal-page__nav-bar__left-side'>
                    <Link to='/personal/edit'>
                        <div className={'react-link' + (this.props.selected === 'edit' ? selectedClass : '')}>
                            {navBarResources.edit}
                        </div>
                    </Link>
                    <Link to='/personal/new'>
                        <div className={'react-link' + (this.props.selected === 'new' ? selectedClass : '')}>
                            {navBarResources.add}
                        </div>
                    </Link>
                    <Link to='/personal/me'>
                        <div className={'react-link' + (this.props.selected === 'me' ? selectedClass : '')}>
                            {navBarResources.me}
                        </div>
                    </Link>
                </div>
                <div className='logout-button' onClick={startLogout}>
                    <span>{navBarResources.logout} {resources.general.unicodeChars.shutdown}</span>
                </div>
            </div>
        );
    }
}

export default PersonalPageNavBar;