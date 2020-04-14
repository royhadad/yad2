import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

/**
HOW TO USE
recieves the following props:
uuid: string
placeholder: string
suggestionsHeader: string
locationCurrentText: string (prop from store)
setLocationCurrentText: function (dispatch to store)
setLocation: function (dispatch picked location to store)
**/

class GenericLocationInput extends React.Component {
    idPreFix = 'genericLocationInputId_';
    handleChange = (locationCurrentText) => {
        this.props.setLocationCurrentText(locationCurrentText);
    };
    handleSelect = (location) => {
        this.props.setLocation(location);
        document.getElementById(this.idPreFix + this.props.uuid).style.display = 'none';
    };
    render() {
        return (
            <PlacesAutocomplete
                value={this.props.locationCurrentText || ''}
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
                                placeholder: this.props.placeholder,
                                className: 'location-search-input',
                            })}
                        />
                        {suggestions.length > 0 &&
                            <div className="autocomplete-dropdown-container" id={this.idPreFix + this.props.uuid}>
                                {suggestions.length > 0 && <div className='suggestions--header'><span>{this.props.suggestionsHeader}</span></div>}
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
}

export default GenericLocationInput;