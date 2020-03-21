import React from 'react';
import MainNavBar from '#components#/MainNavBar/MainNavBar';
import RealEstateNavBar from '#components#/RealEstateNavBar';
import RealEstatePageBody from '#body#/RealEstatePageBody';
import RealEstatePageFooter from '#components#/footer/RealEstatePageFooter';
import { connect } from 'react-redux';
import { setCategory } from '#src#/actions/filters';

class RealEstatePage extends React.Component {
    preFix = '/realestate';
    componentDidMount() {
        this.setCategoryAndValidateUrl(this.props.history.location);
        this.unlisten = this.props.history.listen((location) => {
            this.setCategoryAndValidateUrl(location);
        });
    }
    setCategoryAndValidateUrl(location) {
        const currentPath = location.pathname;
        const defaultUrl = this.preFix + '/forsale';
        if (currentPath.startsWith(this.preFix)) {
            const afterRealEstate = currentPath.slice(currentPath.indexOf(this.preFix) + this.preFix.length);
            if (
                afterRealEstate !== '/forsale' &&
                afterRealEstate !== '/rent' &&
                afterRealEstate !== '/roommates' &&
                afterRealEstate !== '/commercial'
            ) {
                this.props.history.push(defaultUrl);
                this.props.setCategory('forsale');
            } else {
                this.props.setCategory(afterRealEstate.slice(1));
            }
        }
    }
    componentWillUnmount() {
        this.unlisten();
    }
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
const mapDispatchToProps = (dispatch) => ({
    setCategory: (category) => dispatch(setCategory(category))
});
export default connect(undefined, mapDispatchToProps)(RealEstatePage);
