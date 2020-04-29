import React from 'react';
import PersonalPageNavBar from './PersonalPageNavBar';
import resources from '#resources#';
const personalPageResources = resources.personalPage;

class PersonalPage extends React.Component {
    render() {
        const ChildComponent = this.props.childComponent;
        return (
            <div>
                <div className='personal-page__wrapper'>
                    <div className='personal-page__container'>
                        <h1>{personalPageResources.header}</h1>
                        <div className='personal-page__body'>
                            <PersonalPageNavBar selected={this.props.selected} />
                            {<ChildComponent {...this.props} />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonalPage;