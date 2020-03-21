import React from 'react';
import { deriveXfromViewPortX, deriveYfromViewPortY } from '#src#/utility/calculatePositions';
import FreeSearch from './SearchFields/FreeSearch';
import onClickOutside from 'react-onclickoutside';
import SearchField from '#components#/generics/SearchField';
import SearchBarAdvancedProperties from './SearchFields/SearchBarAdvancedProperties';
import SearchBarAdvancedFilters from './SearchBarAdvancedFilters';
import SearchBarAdvancedBottomButtons from './SearchBarAdvancedBottomButtons';
import resources from '#resources#';
const searchBarResources = resources.body.searchBar;

class SearchBarAdvanced extends React.Component {
    handleClickOutside = this.props.toggleShouldLoadAdvancedSearch;
    render() {
        const parentRect = this.props.parentRect;
        const style = {
            left: deriveXfromViewPortX(parentRect.left),
            top: deriveYfromViewPortY(parentRect.bottom),
            width: parentRect.width,
        };
        return (
            <div className='search-bar__advanced__wrapper' style={style}>
                <SearchBarAdvancedProperties />
                <hr />
                <SearchBarAdvancedFilters />
                <hr />
                <SearchField metaText={searchBarResources.text.metaText} selectorJSX={<FreeSearch />} />
                <hr />
                <SearchBarAdvancedBottomButtons />
            </div>
        );
    }
}

export default onClickOutside(SearchBarAdvanced);