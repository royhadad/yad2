import React from 'react';
import resources from '#resources#';
const filterBarResources = resources.body.searchResults.filterBar;
const unicode = resources.general.unicodeChars;

class ShowMap extends React.Component {
    render() {
        return (
            <div className='filter-bar__filter__wrapper'>
                <button
                    className='filter-bar__button'
                    onClick={() => { alert('Not implemented'); }}
                >
                    {unicode.map} {filterBarResources.showMapText}
                </button>
            </div>
        );
    }
}
export default ShowMap;