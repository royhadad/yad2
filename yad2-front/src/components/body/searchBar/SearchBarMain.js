import React from 'react';
import { connect } from 'react-redux';
import SearchField from '../../generics/SearchField';
import Type from './SearchFields/Type';
import DealType from './SearchFields/DealType';
import Rooms from './SearchFields/Rooms';
import Roommates from './SearchFields/Roommates';
import Price from './SearchFields/Price';
import resources from '../../../resources.json';
import { fetchItems } from '../../../selectors/items';
import Location from './SearchFields/Location';
const searchBarResources = resources.body.searchBar;

class SearchBarMain extends React.Component {
    renderSearchFieldsByCategory = (category) => {
        switch (category) {
            case 'forsale':
                return (
                    <React.Fragment>
                        <SearchField metaText={searchBarResources.typeInput.metaText} selectorJSX={<Type />} />
                        <SearchField metaText={searchBarResources.rooms.metaText} selectorJSX={<Rooms />} />
                        <SearchField metaText={searchBarResources.price.metaText} selectorJSX={<Price />} />
                    </React.Fragment>
                );
            case 'rent':
                return (
                    <React.Fragment>
                        <SearchField metaText={searchBarResources.typeInput.metaText} selectorJSX={<Type />} />
                        <SearchField metaText={searchBarResources.rooms.metaText} selectorJSX={<Rooms />} />
                        <SearchField metaText={searchBarResources.price.metaText} selectorJSX={<Price />} />
                    </React.Fragment>
                );
            case 'roommates':
                return (
                    <React.Fragment>
                        <SearchField metaText={searchBarResources.price.metaText} selectorJSX={<Price />} />
                        <SearchField metaText={searchBarResources.rooms.metaText} selectorJSX={<Roommates />} />
                        <SearchField metaText={searchBarResources.rooms.metaText} selectorJSX={<Rooms />} />
                    </React.Fragment>
                );
            case 'commercial':
                return (
                    <React.Fragment>
                        <SearchField metaText={searchBarResources.dealTypeInput.metaText} selectorJSX={<DealType />} />
                        <SearchField metaText={searchBarResources.typeInput.metaText} selectorJSX={<Type />} />
                        <SearchField metaText={searchBarResources.price.metaText} selectorJSX={<Price />} />
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