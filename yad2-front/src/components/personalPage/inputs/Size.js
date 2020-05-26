import React from 'react';
import { connect } from 'react-redux';
import { setSize } from '../../../actions/itemForm';
import SearchField from '#components#/generics/SearchField';
import resources from '#resources#';

const inputsResources = resources.personalPage.itemForm.inputs;

class Size extends React.Component {
    render() {
        return (
            <input
                type="text"
                pattern="[0-9]*"
                value={this.props.size || ''}
                onChange={(e) => {
                    let newValue = e.target.value;
                    if (newValue === '') {
                        this.props.setSize(undefined);
                    } else {
                        newValue = parseInt(e.target.value);
                        if (newValue && newValue >= 1 && newValue <= 10000) {
                            this.props.setSize(newValue);
                        }
                    }
                }}
                className='input'
            />
        )
    }
}
const mapStateToProps = (state) => ({
    size: state.itemForm.item.size
})
const mapDispatchToProps = (dispatch) => ({
    setSize: (size) => (dispatch(setSize(size)))
})

const SizeWithStore = connect(mapStateToProps, mapDispatchToProps)(Size);
export default () => (
    <SearchField metaText={inputsResources.Size.metaText} selectorJSX={<SizeWithStore />} />
)