import React from 'react';
import { connect } from 'react-redux';
import { toggleProperty } from '../../../actions/itemForm';
import { SearchBarAdvancedPropertiesWithoutStore } from '../../body/searchBar/SearchFields/SearchBarAdvancedProperties';
import resources from '#resources#';
const inputsResources = resources.personalPage.itemForm.inputs;

const mapStateToProps = (state) => ({
    category: state.itemForm.item.category,
    selectedProperties: state.itemForm.item.properties
})
const mapDispatchToProps = (dispatch) => ({
    toggleProperty: (property) => dispatch(toggleProperty(property))
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchBarAdvancedPropertiesWithoutStore);