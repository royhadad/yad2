import React from 'react';
import { connect } from 'react-redux';
import { setLocation, setLocationCurrentText } from '#actions#/filters';
import GenericLocationInput from '#components#/generics/GenericLocationInput';
import resources from '#resources#';
const locationInputResources = resources.body.searchBar.locationInput;

class Location extends React.Component {
    render() {
        return (
            <GenericLocationInput
                uuid={'searchBarLocationId'}
                placeholder={locationInputResources.placeholder}
                suggestionsHeader={locationInputResources.suggestionsHeader}
                locationCurrentText={this.props.locationCurrentText}
                setLocation={this.props.setLocation}
                setLocationCurrentText={this.props.setLocationCurrentText}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    locationCurrentText: state.filters.locationCurrentText
});
const mapDispatchToProps = (dispatch) => ({
    setLocation: (location) => dispatch(setLocation(location)),
    setLocationCurrentText: (locationCurrentText) => dispatch(setLocationCurrentText(locationCurrentText))
})
export const LocationWithoutStore = Location;
export default connect(mapStateToProps, mapDispatchToProps)(Location);