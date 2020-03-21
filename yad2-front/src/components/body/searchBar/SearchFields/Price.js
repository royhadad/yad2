import React from 'react';
import { connect } from 'react-redux';
import RangeInput from '#components#/generics/RangeInput';
import { setMinPrice, setMaxPrice } from '#actions#/filters';
import resources from '#resources#';
const textData = resources.body.searchBar.price;

class Price extends React.Component {
    render() {
        return (
            <RangeInput
                from={this.props.from}
                to={this.props.to}
                fromPlaceholder={textData.fromPlaceholder}
                toPlaceholder={textData.toPlaceholder}
                dispatchFrom={this.props.dispatchFrom}
                dispatchTo={this.props.dispatchTo}
            />
        );
    }
}
const mapStateToProps = (state) => ({
    from: state.filters.search.minPrice,
    to: state.filters.search.maxPrice
});
const mapDispatchToProps = (dispatch) => ({
    dispatchFrom: (price) => dispatch(setMinPrice(price)),
    dispatchTo: (price) => dispatch(setMaxPrice(price))
});
export default connect(mapStateToProps, mapDispatchToProps)(Price);