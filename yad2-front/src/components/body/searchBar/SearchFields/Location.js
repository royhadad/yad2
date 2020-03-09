import React from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../../../../actions/filters';

class Location extends React.Component {
    getPlaceHolderText() {
        return 'לדוגמא: באר שבע, רמות';
    }
    render() {
        return (
            <input
                placeholder={this.getPlaceHolderText()}
                value={this.props.location === undefined ? '' : this.props.location}
                onChange={(e) => this.props.setLocation(e.target.value)}
            />
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