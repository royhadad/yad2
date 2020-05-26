import React from 'react';
import { connect } from 'react-redux';
import { toggleDealType } from '#actions#/filters';
import OptionsPicker from '#components#/generics/OptionsPicker';
const textResources = require('#resources#');
const dealTypeInput = textResources.body.searchBar.dealTypeInput;

class Type extends React.Component {
    render() {
        return (
            <div className='.search-field__wrapper'>
                <OptionsPicker
                    options={dealTypeInput.types}
                    selectedOptions={this.props.dealTypes}
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
    dealTypes: state.filters.search.dealTypes
});
const mapDispatchToProps = (dispatch) => ({
    dispatchAddOption: (optionValue) => dispatch(toggleDealType(optionValue)),
    dispatchRemoveOption: (optionValue) => dispatch(toggleDealType(optionValue))
});
export default connect(mapStateToProps, mapDispatchToProps)(Type);