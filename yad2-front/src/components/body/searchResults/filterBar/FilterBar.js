import React from 'react';
import { connect } from 'react-redux';
import {
    sortByDate,
    sortByPriceHighlow,
    sortByPriceLowHigh,
    toggleShowOnlyItemsWithPrice,
    toggleShowOnlyItemsWithImage
} from '#actions#/filters';
import FilterButtons from './FilterButtons';
import SortBy from './SortBy';
import ShowMap from './ShowMap';

class FilterBar extends React.Component {
    render() {
        return (
            <div className='filter-bar__wrapper'>
                <SortBy filters={this.props.filters} />
                <FilterButtons filters={this.props.filters} />
                <ShowMap />
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sortByDate: () => dispatch(sortByDate),
        sortByPriceHighlow: () => dispatch(sortByPriceHighlow),
        sortByPriceLowHigh: () => dispatch(sortByPriceLowHigh),
        toggleShowOnlyItemsWithImage: () => dispatch(toggleShowOnlyItemsWithImage),
        toggleShowOnlyItemsWithPrice: () => dispatch(toggleShowOnlyItemsWithPrice)
    };
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);