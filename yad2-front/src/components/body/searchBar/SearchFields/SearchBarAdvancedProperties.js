import React from 'react';
import { connect } from 'react-redux';
import { toggleProperty } from '#actions#/filters';
import Checkbox from '#components#/generics/Checkbox';
import resources from '#resources#';
const advancedPropertiesResources = resources.body.searchBar.advancedProperties;

class SearchBarAdvancedProperties extends React.Component {
    render() {
        const allProperties = advancedPropertiesResources[this.props.category];
        return (
            <div className='search-bar-advanced-properties__wrapper'>
                <div className='metaText__wrapper'>
                    <h4>
                        {advancedPropertiesResources.metaText}
                    </h4>
                </div>
                <div className='options__wrapper'>
                    {
                        allProperties.map((property, index) => (
                            <Checkbox
                                key={index}
                                option={property}
                                isSelected={this.props.selectedProperties.includes(property.value)}
                                toggleOption={this.props.toggleProperty}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    category: state.filters.search.category,
    selectedProperties: state.filters.search.properties
});
const mapDispatchToProps = (dispatch) => ({
    toggleProperty: (property) => dispatch(toggleProperty(property))
});
export const SearchBarAdvancedPropertiesWithoutStore = SearchBarAdvancedProperties;
export default connect(mapStateToProps, mapDispatchToProps)(SearchBarAdvancedProperties);
