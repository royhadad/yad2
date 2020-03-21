import React from 'react';
import { connect } from 'react-redux';
import { setMinFloor, setMaxFloor } from '#actions#/filters';
import RangePickerSimple from '#components#/generics/RangePickerSimple';
import resources from '#resources#';
const minusOneValue = resources.body.searchBar.typeInput.types.forsale.filter((type) => type.value === 'basementAndParter')[0].text;
class Floor extends React.Component {
    getOptions = () => {
        const options = [];
        for (let i = -1; i <= 17; i++) {
            options.push(i);
        }
        return options;
    }
    render() {
        return (
            <RangePickerSimple
                fromOptions={this.getOptions()}
                toOptions={this.getOptions()}
                dispatchFrom={this.props.dispatchFrom}
                dispatchTo={this.props.dispatchTo}
                to={this.props.to}
                from={this.props.from}
                minusOneValue={minusOneValue}
                uuid={'floorSearchFieldComponent'}
            />
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    dispatchFrom: (minFloor) => dispatch(setMinFloor(minFloor)),
    dispatchTo: (maxFloor) => dispatch(setMaxFloor(maxFloor))
});
const mapStateToProps = (state) => ({
    from: state.filters.minFloor,
    to: state.filters.maxFloor
});
export default connect(mapStateToProps, mapDispatchToProps)(Floor);