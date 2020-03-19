import React from 'react';
import { connect } from 'react-redux';
import { setLocation, setLocationCurrentText } from '../../../../actions/filters';
import GenericLocationInput from '../../../generics/GenericLocationInput';
import resources from '../../../../resources.json';
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
    locationCurrentText: state.filters.locationCurrentText,
    isGoogleAPILoaded: state.items.isGoogleAPILoaded
});
const mapDispatchToProps = (dispatch) => ({
    setLocation: (location) => dispatch(setLocation(location)),
    setLocationCurrentText: (locationCurrentText) => dispatch(setLocationCurrentText(locationCurrentText))
})
export default connect(mapStateToProps, mapDispatchToProps)(Location);