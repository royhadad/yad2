import React from 'react';
import MainNavBar from './MainNavBar/MainNavBar';
import RealEstateNavBar from './RealEstateNavBar';
import RealEstatePageBody from './body/RealEstatePageBody';
import RealEstatePageFooter from './footer/RealEstatePageFooter';

class RealEstatePage extends React.Component {
    render() {
        return (
            <div>
                <MainNavBar />
                <RealEstateNavBar />
                <RealEstatePageBody />
                <RealEstatePageFooter />
            </div>
        );
    }
}

export default RealEstatePage;
