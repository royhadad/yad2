import React from 'react';
import { connect } from 'react-redux';
import { setMinRooms, setMaxRooms } from '#actions#/filters';
import RangePicker from '#components#/generics/RangePicker';
class Rooms extends React.Component {
    getOptions = () => {
        const options = [];
        for (let i = 1; i <= 12; i += 0.5) {
            options.push(i);
        }
        return options;
    }
    render() {
        return (
            <RangePicker
                placeholder={'חדרים'}
                fromOptions={this.getOptions()}
                toOptions={this.getOptions()}
                dispatchFrom={this.props.dispatchFrom}
                dispatchTo={this.props.dispatchTo}
                to={this.props.to}
                from={this.props.from}
                uuid={'roomsSearchFieldComponent'}
            />
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    dispatchFrom: (minRooms) => dispatch(setMinRooms(minRooms)),
    dispatchTo: (maxRooms) => dispatch(setMaxRooms(maxRooms))
});
const mapStateToProps = (state) => ({
    from: state.filters.minRooms,
    to: state.filters.maxRooms
});
export default connect(mapStateToProps, mapDispatchToProps)(Rooms);