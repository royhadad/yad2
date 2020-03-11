import React from 'react';
import { connect } from 'react-redux';
import deriveStringFromNumber from '../../../utility/deriveStringFromNumber';
import resources from '../../../resources.json';
const searchResultsMetaDataResources = resources.body.searchResults.searchResultsMetaData;
const propertyTypes = resources.general.propertyTypes;

class SearchResultsMetaData extends React.Component {
    getHeaderText = (category, searchedLocation) => {
        let text = '';
        if (category === 'forsale' || category === 'rent') {
            text += 'דירות ל';
        } else if (category === 'roommates') {
            text += 'דירות ';
        } else if (category === 'commercial') {
            text += 'נדל"ן ';
        }
        text += propertyTypes[category];
        if (searchedLocation !== '') {
            text += ' - ' + searchedLocation;
        }
        return text;
    }
    render() {
        return (
            <div className='search-results-meta-data-wrapper'>
                <h2>{this.getHeaderText(this.props.category, this.props.searchedLocation)}</h2>
                <p>{searchResultsMetaDataResources.numOfResultsTextStart}{deriveStringFromNumber(this.props.totalItems)}{searchResultsMetaDataResources.numOfResultsTextEnd}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    category: state.filters.search.category,
    searchedLocation: state.items.searchedLocation === undefined ? '' : state.items.searchedLocation.description
})
export default connect(mapStateToProps)(SearchResultsMetaData);