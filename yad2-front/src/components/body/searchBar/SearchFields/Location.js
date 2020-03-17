import React from 'react';
import { connect } from 'react-redux';
import { setLocation, setLocationCurrentText } from '../../../../actions/filters';
import resources from '../../../../resources.json';
const locationInputResources = resources.body.searchBar.locationInput;

class Location extends React.Component {
    handleChange = (locationCurrentText) => {
        this.props.setLocationCurrentText(locationCurrentText);
    };
    handleSelect = (location) => {
        this.props.setLocation(location);
        document.getElementById('LocationInputId1').style.display = 'none';
    };

    renderPlacesAutoComplete = (PlacesAutocomplete) => {
        return (
            <PlacesAutocomplete
                value={this.props.locationCurrentText}
                onChange={this.handleChange}
                searchOptions={{
                    types: ['(regions)'],
                    componentRestrictions: { country: "il" }
                }}
                onError={(status, clearSuggestions) => { clearSuggestions(); }}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: locationInputResources.placeholder,
                                className: 'location-search-input',
                            })}
                        />
                        {suggestions.length > 0 &&
                            <div className="autocomplete-dropdown-container" id="LocationInputId1">
                                {suggestions.length > 0 && <div className='suggestions--header'><span>{locationInputResources.suggestionsHeader}</span></div>}
                                {suggestions.map((suggestion) => {
                                    const className = suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item--unactive';
                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, {
                                                className
                                            })}
                                            onClick={() => this.handleSelect(suggestion)}
                                        >
                                            <span>{suggestion.description}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        }
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }

    render() {
        if (this.props.isGoogleAPILoaded) {
            return false;
        } else {
            return import('react-places-autocomplete')
                .then((PlacesAutocomplete) => {
                    return this.renderPlacesAutoComplete();
                });
        }
    }
}
//TODO
//FIX USING:
//https://medium.com/front-end-weekly/loading-components-asynchronously-in-react-app-with-an-hoc-61ca27c4fda7

const mapStateToProps = (state) => ({
    locationCurrentText: state.filters.locationCurrentText,
    isGoogleAPILoaded: state.items.isGoogleAPILoaded
});
const mapDispatchToProps = (dispatch) => ({
    setLocation: (location) => dispatch(setLocation(location)),
    setLocationCurrentText: (locationCurrentText) => dispatch(setLocationCurrentText(locationCurrentText))
})
export default connect(mapStateToProps, mapDispatchToProps)(Location);