import React from 'react';
import { connect } from 'react-redux';
import { addType, removeType } from '../../../../actions/filters';
import OptionsPicker from '../../../generics/OptionsPicker';
const textResources = require('../../../../resources.json');
const typeInput = textResources.body.searchBar.typeInput;

class Type extends React.Component {
    render() {
        return (
            <div className='.search-field__wrapper'>
                <OptionsPicker
                    options={typeInput.types[this.props.category]}
                    selectedOptions={this.props.types}
                    placeholder={typeInput.placeholder}
                    expandText={typeInput.expandButtonText.expand}
                    collpaseText={typeInput.expandButtonText.collapse}
                    dispatchAddOption={this.props.dispatchAddOption}
                    dispatchRemoveOption={this.props.dispatchRemoveOption}
                    uuid={'typeSearchFieldComponent1'}
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    category: state.filters.search.category,
    types: state.filters.search.types
});
const mapDispatchToProps = (dispatch) => ({
    dispatchAddOption: (optionValue) => dispatch(addType(optionValue)),
    dispatchRemoveOption: (optionValue) => dispatch(removeType(optionValue))
});
export default connect(mapStateToProps, mapDispatchToProps)(Type);