import React from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../../../../actions/filters';

class Location extends React.Component {
    state = {
        autoCompleteOptions: []
    }
    fetchAutoCompleteOptions = async (input) => {
        if (input !== undefined) {
            try {
                let response = await fetch(`googlePlacesAutoComplete?input=${input}`);
                response = await response.json();
                console.log(response);
                
                
                this.setState({ autoCompleteOptions: response.options });
            } catch (e) {
                console.log('google places api error', e);
            }
        }
    }
    getPlaceHolderText() {
        return 'לדוגמא: באר שבע';
    }
    render() {
        return (
            <div>
                <input
                    placeholder={this.getPlaceHolderText()}
                    value={this.props.location}
                    onChange={(e) => this.fetchAutoCompleteOptions(e.target.value)}
                />
                {
                    this.state.autoCompleteOptions.length>0
                    &&
                    <div>
                        {this.state.autoCompleteOptions.map((option)=><span>option</span>)}
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    location: state.filters.search.location
});
const mapDispatchToProps = (dispatch) => ({
    setLocation: (location) => dispatch(setLocation(location))
});
export default connect(mapStateToProps, mapDispatchToProps)(Location);