import React from 'react';
import resources from '../../../../resources.json';
import { connect } from 'react-redux';
import { toggleShowOnlyItemsWithPrice, toggleShowOnlyItemsWithImage } from '../../../../actions/filters';
const filterBarResources = resources.body.searchResults.filterBar;
const unicode = resources.general.unicodeChars;

class FilterButtons extends React.Component {
    render() {
        const notSelectedButtonClassName = 'filter-bar__button';
        const selectedButtonClassName = 'filter-bar__button__selected';        
        return (
            <div className='filter-bar__filter__wrapper'>
                <span>{filterBarResources.filterText}</span>
                <button
                    className={this.props.filters.search.showOnlyItemsWithPrice ? selectedButtonClassName : notSelectedButtonClassName}
                    onClick={this.props.toggleShowOnlyItemsWithPrice}
                >
                    {unicode.shekel} {filterBarResources.filterWithPriceText}
                </button>
                <button
                    className={this.props.filters.search.showOnlyItemsWithImage ? selectedButtonClassName : notSelectedButtonClassName}
                    onClick={this.props.toggleShowOnlyItemsWithImage}
                >
                    {unicode.image} {filterBarResources.filterWithImageText}
                </button>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    toggleShowOnlyItemsWithPrice: () => dispatch(toggleShowOnlyItemsWithPrice()),
    toggleShowOnlyItemsWithImage: () => dispatch(toggleShowOnlyItemsWithImage())
});
export default connect(undefined, mapDispatchToProps)(FilterButtons);