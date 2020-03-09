import React from 'react';
import { connect } from 'react-redux';
import { addType, removeType } from '../../../../actions/filters';
import OptionsPicker from '../../../generics/OptionsPicker';
const textResources = require('../../../../resources.json');
const dealTypeInput = textResources.body.searchBar.dealTypeInput;

class Type extends React.Component {
    render() {
        return (
            <div className='.search-field__wrapper'>
                <OptionsPicker
                    options={dealTypeInput.types}
                    selectedOptions={this.props.types}
                    placeholder={dealTypeInput.placeholder}
                    dispatchAddOption={this.props.dispatchAddOption}
                    dispatchRemoveOption={this.props.dispatchRemoveOption}
                    uuid={'dealTypeSearchFieldComponent1'}
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    types: state.filters.search.types
});
const mapDispatchToProps = (dispatch) => ({
    dispatchAddOption: (optionValue) => dispatch(addType(optionValue)),
    dispatchRemoveOption: (optionValue) => dispatch(removeType(optionValue))
});
export default connect(mapStateToProps, mapDispatchToProps)(Type);