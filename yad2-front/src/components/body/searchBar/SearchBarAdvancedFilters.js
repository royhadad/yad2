import React from 'react';
import Size from './SearchFields/Size';
import Floor from './SearchFields/Floor';
import EntryDate from './SearchFields/EntryDate';
import ImmediateEntryCheckbox from './SearchFields/ImmediateEntryCheckbox';
import SearchField from '../../generics/SearchField';
import { connect } from 'react-redux';
import resources from '../../../resources.json';
const searchBarResources = resources.body.searchBar;

class SearchBarAdvancedFilters extends React.Component {
    renderSearchFieldsByCategory = (category) => {
        switch (category) {
            case 'forsale':
            case 'rent':
            case 'commercial':
                return (
                    <React.Fragment>
                        <SearchField metaText={searchBarResources.floor.metaText} selectorJSX={<Floor />} />
                        <SearchField metaText={searchBarResources.size.metaText} selectorJSX={<Size />} />
                    </React.Fragment>
                );
            default:
                return undefined;
        }
    }
    render() {
        return (
            <div className='search-bar__main__container'>
                {this.renderSearchFieldsByCategory(this.props.category)}
                <SearchField metaText={searchBarResources.entryDate.metaText} selectorJSX={<EntryDate />} />
                <SearchField metaText={''} selectorJSX={<ImmediateEntryCheckbox />} />

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    category: state.filters.search.category
})
export default connect(mapStateToProps)(SearchBarAdvancedFilters);