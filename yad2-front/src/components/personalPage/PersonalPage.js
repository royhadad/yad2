import React from 'react';
import MainNavBar from '#components#/MainNavBar/MainNavBar';
import RealEstateNavBar from '#components#/RealEstateNavBar';
import RealEstatePageFooter from '#components#/footer/RealEstatePageFooter';
import { connect } from 'react-redux';
import resources from '#resources#';
const personalPageResources = resources.personalPage;

class PersonalPage extends React.Component {
    render() {
        return (
            <div>
                <MainNavBar />
                <RealEstateNavBar />
                <div className='personal-page__wrapper'>
                    <div className='personal-page__body'>
                        <h1>
                            {personalPageResources.header}
                        </h1>

                    </div>
                </div>
                <RealEstatePageFooter />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({});
export default connect(undefined, mapDispatchToProps)(PersonalPage);