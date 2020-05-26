import React from 'react';
import { connect } from 'react-redux';
import { setText } from '../../../actions/itemForm';
import SearchField from '#components#/generics/SearchField';
import resources from '#resources#';

const inputsResources = resources.personalPage.itemForm.inputs;

class Text extends React.Component {
    render() {
        return (
            <React.Fragment>
                <textarea
                    value={this.props.text}
                    onChange={(e) => {
                        const newValue = e.target.value;
                        this.props.setText(newValue);
                    }}
                    className='text-input'
                />
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    text: state.itemForm.item.text
})
const mapDispatchToProps = (dispatch) => ({
    setText: (text) => (dispatch(setText(text)))
})

const TextWithStore = connect(mapStateToProps, mapDispatchToProps)(Text);
export default () => (
    <SearchField metaText={inputsResources.Text.metaText} selectorJSX={<TextWithStore />} />
)