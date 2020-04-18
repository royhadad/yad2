import React from 'react';
import { connect } from 'react-redux';
import { startLogout, startLogoutAll } from '../../actions/auth';
import resources from '#resources#';
const personalPageResources = resources.personalPage;

class PersonalPage extends React.Component {
    render() {
        return (
            <div>
                <div className='personal-page__wrapper'>
                    <div className='personal-page__body'>
                        <h1>
                            {personalPageResources.header}
                            <button onClick={startLogout}>logout</button>
                            <button onClick={startLogoutAll}>logout all</button>
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({});
export default connect(undefined, mapDispatchToProps)(PersonalPage);