import React from 'react';
import { connect } from 'react-redux';
import { clearFilters, setLocation } from '../../actions/filters';
import resources from '../../resources.json';
import { fetchItems } from '../../selectors/items';
const propertyTypes = resources.general.propertyTypes;

class TopInfo extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='top-info__wrapper'>
                    <div className='top-info__currentNav'>
                        <span onClick={this.props.clearFilters} className='clickable top-info__currentNav__item'>ראשי</span>
                        {'>'}
                        <span onClick={this.props.clearSearchLocation} className='clickable top-info__currentNav__item'>{propertyTypes[this.props.category]}</span>
                        {this.props.searchedLocation && <React.Fragment>{'>'}<span className='top-info__currentNav__item'>{this.props.searchedLocation}</span></React.Fragment>}
                    </div>
                    <button className='top-info__accessibility-button' onClick={() => alert('not implemented, go to https://www.negishim.org/%D7%97%D7%99%D7%A4%D7%95%D7%A9-%D7%9E%D7%A9%D7%A8%D7%95%D7%AA.html to implement after first deployment')}>
                        {resources.body.topInfo.accessibilityText}<span>{resources.general.unicodeChars.personInWheelchair}</span>
                    </button>
                </div>
                <div className='top-info__spacer' />
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => ({
    category: state.filters.search.category,
    searchedLocation: state.items.searchedLocation === undefined ? '' : state.items.searchedLocation.description
});
const mapDispatchToProps = (dispatch) => ({
    clearSearchLocation: () => {
        dispatch(setLocation(undefined));
        fetchItems();
    },
    clearFilters: () => {
        dispatch(clearFilters());
        fetchItems();
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(TopInfo);