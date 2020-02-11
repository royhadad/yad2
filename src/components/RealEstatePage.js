import React from 'react';
import Header from './Header';
import RealEstatePageHeader from './PageHeader';
import RealEstatePageBody from './RealEstatePageBody';
import RealEstatePageFooter from './RealEstatePageFooter';

class RealEstatePage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <RealEstatePageHeader />
                <RealEstatePageBody />
                <RealEstatePageFooter />
            </div>
        );
    }
}

export default RealEstatePage;
