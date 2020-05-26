import React from 'react';
import { connect } from 'react-redux';
import { setLocation, setLocationCurrentText } from '../../../actions/itemForm';
import resources from '#resources#';
import { LocationWithoutStore } from '../../body/searchBar/SearchFields/Location';
import SearchField from '../../generics/SearchField';

const inputsResources = resources.personalPage.itemForm.inputs;

const mapStateToProps = (state) => ({
    locationCurrentText: state.itemForm.locationCurrentText
});
const mapDispatchToProps = (dispatch) => ({
    setLocation: (location) => dispatch(setLocation(location)),
    setLocationCurrentText: (locationCurrentText) => dispatch(setLocationCurrentText(locationCurrentText))
})

const Location = connect(mapStateToProps, mapDispatchToProps)(LocationWithoutStore);
export default () => (
    <SearchField metaText={inputsResources.Location.metaText} selectorJSX={<Location />} />
)