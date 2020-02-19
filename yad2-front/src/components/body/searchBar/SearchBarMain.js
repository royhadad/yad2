import React from 'react';
import resources from '../../../resources.json';
const searchBarResources = resources.body.searchBar;
class SearchBarMain extends React.Component {

    onClickSearch = () => {
        alert('TODO');
    }

    render() {
        return (
            <div className='search-bar__main__container'>
                <span>
                {searchBarResources.locationInput.description}<input></input>
                </span>
                <button className='search-bar__main__advanced-button' onClick={this.props.toggleShouldLoadAdvancedSearch}>{searchBarResources.advancedSearchButton}</button>
                <button className='search-bar__main__search-button' onClick={this.onClickSearch}>
                    <span>{resources.general.unicodeChars.search}</span>{searchBarResources.searchButton}
                </button>
            </div>
        );
    }
}

export default SearchBarMain;