import React from 'react';
import { connect } from 'react-redux';
import SearchField from '#components#/generics/SearchField';
import Type from './SearchFields/Type';
import DealType from './SearchFields/DealType';
import Rooms from './SearchFields/Rooms';
import Roommates from './SearchFields/Roommates';
import Price from './SearchFields/Price';
import resources from '#resources#';
import { fetchItems } from '#src#/selectors/items';
import Location from './SearchFields/Location';
const searchBarResources = resources.body.searchBar;

const searchFields = {
    type: (<SearchField metaText={searchBarResources.typeInput.metaText} selectorJSX={<Type />} />),
    rooms: (<SearchField metaText={searchBarResources.rooms.metaText} selectorJSX={<Rooms />} />),
    price: (<SearchField metaText={searchBarResources.price.metaText} selectorJSX={<Price />} />),
    roommates: (<SearchField metaText={searchBarResources.numOfRoommates.metaText} selectorJSX={<Roommates />} />),
    dealType: (<SearchField metaText={searchBarResources.dealTypeInput.metaText} selectorJSX={<DealType />} />)
}



class SearchBarMain extends React.Component {
    renderSearchFieldsByCategory = (category) => {
        switch (category) {
            case 'forsale':
                return (
                    <React.Fragment>
                        {searchFields.type}
                        {searchFields.rooms}
                        {searchFields.price}
                    </React.Fragment>
                );
            case 'rent':
                return (
                    <React.Fragment>
                        {searchFields.type}
                        {searchFields.rooms}
                        {searchFields.price}
                    </React.Fragment>
                );
            case 'roommates':
                return (
                    <React.Fragment>
                        {searchFields.price}
                        {searchFields.roommates}
                        {searchFields.rooms}
                    </React.Fragment>
                );
            case 'commercial':
                return (
                    <React.Fragment>
                        {searchFields.dealType}
                        {searchFields.type}
                        {searchFields.price}
                    </React.Fragment>
                );
            default:
                throw new Error('couldnt load correct search fields!');
        }
    }
    render() {
        return (
            <div className='search-bar__main__container'>
                <SearchField metaText={searchBarResources.locationInput.metaText} selectorJSX={<Location />} />
                {this.renderSearchFieldsByCategory(this.props.category)}
                <span className='search-buttons__container'>
                    <SearchField metaText='' selectorJSX={<button className='search-bar__main__advanced-button' onClick={this.props.toggleShouldLoadAdvancedSearch}>{searchBarResources.advancedSearchButton}</button>} />
                    <SearchField metaText='' selectorJSX={(
                        <button className='search-bar__main__search-button' onClick={() => fetchItems()}>
                            <span>{resources.general.unicodeChars.search}</span>{searchBarResources.searchButton}
                        </button>
                    )} />
                </span>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    category: state.filters.search.category
});
export default connect(mapStateToProps)(SearchBarMain);