import React from 'react';
import { connect } from 'react-redux';
import { setMinRoommates, setMaxRoommates } from '../../../../actions/filters';
import RangePicker from '../../../generics/RangePicker';
class Roommates extends React.Component {
    getOptions = () => {
        const options = [];
        for (let i = 2; i <= 5; i++) {
            options.push(i);
        }
        return options;
    }
    render() {
        return (
            <RangePicker
                placeholder={'שותפים'}
                fromOptions={this.getOptions()}
                toOptions={this.getOptions()}
                dispatchFrom={this.props.dispatchFrom}
                dispatchTo={this.props.dispatchTo}
                to={this.props.to}
                from={this.props.from}
                uuid={'roommatesSearchFieldComponent'}
            />
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    dispatchFrom: (minRoommates) => dispatch(setMinRoommates(minRoommates)),
    dispatchTo: (maxRoommates) => dispatch(setMaxRoommates(maxRoommates))
});
const mapStateToProps = (state) => ({
    from: state.filters.minRoommates,
    to: state.filters.maxRoommates
});
export default connect(mapStateToProps, mapDispatchToProps)(Roommates);