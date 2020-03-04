import React from 'react';
import SearchField from '../../generics/SearchField';
import Location from './SearchFields/Location';
import Type from './SearchFields/Type';
import Rooms from './SearchFields/Rooms';
import resources from '../../../resources.json';
const searchBarResources = resources.body.searchBar;
class SearchBarMain extends React.Component {

    onClickSearch = () => {
        alert('TODO');
    }

    render() {
        return (
            <div className='search-bar__main__container'>
                <SearchField metaText={searchBarResources.locationInput.metaText} selectorJSX={<Location />} />
                <SearchField metaText={searchBarResources.typeInput.metaText} selectorJSX={<Type/>} />
                <SearchField metaText={searchBarResources.rooms.metaText} selectorJSX={<Rooms/>} />
                <SearchField metaText='' selectorJSX={<button className='search-bar__main__advanced-button' onClick={this.props.toggleShouldLoadAdvancedSearch}>{searchBarResources.advancedSearchButton}</button>} />
                <SearchField metaText='' selectorJSX={(
                    <button className='search-bar__main__search-button' onClick={this.onClickSearch}>
                        <span>{resources.general.unicodeChars.search}</span>{searchBarResources.searchButton}
                    </button>
                )} />



            </div>
        );
    }
}

export default SearchBarMain;