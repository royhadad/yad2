import React from 'react';
import { connect } from 'react-redux';
import { toggleOnlyImmediateEntry } from '#actions#/filters';
import Checkbox from '#components#/generics/Checkbox';
import resources from '#resources#';
const text = resources.body.searchBar.immediateEntryCheckbox.text;

class ImmediateEntryCheckbox extends React.Component {
    render() {
        return (
            <Checkbox
                option={{ text: text, value: '' }}
                isSelected={this.props.onlyImmediateEntry}
                toggleOption={this.props.toggleOnlyImmediateEntry}
            />
        );
    }
}
const mapStateToProps = (state) => ({
    onlyImmediateEntry: state.filters.search.onlyImmediateEntry
});
const mapDispatchToProps = (dispatch) => ({
    toggleOnlyImmediateEntry: () => dispatch(toggleOnlyImmediateEntry())
});
export default connect(mapStateToProps, mapDispatchToProps)(ImmediateEntryCheckbox)