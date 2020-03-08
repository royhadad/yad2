import React from 'react';
import {connect} from 'react-redux';
import RangeInput from '../../../generics/RangeInput';
import {setMinSize, setMaxSize} from '../../../../actions/filters';
import resources from '../../../../resources.json';
const textData = resources.body.searchBar.size;

class Size extends React.Component{
    render(){
        return(
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
const mapStateToProps = (state)=>({
    from: state.filters.search.minSize,
    to: state.filters.search.maxSize
});
const mapDispatchToProps = (dispatch)=>({
    dispatchFrom: (price)=>dispatch(setMinSize(price)),
    dispatchTo: (price)=>dispatch(setMaxSize(price))
});
export default connect(mapStateToProps, mapDispatchToProps)(Size);