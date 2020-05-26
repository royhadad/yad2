import React from 'react';
import { connect } from 'react-redux';
import { setRoommates } from '../../../actions/itemForm';
import SearchField from '#components#/generics/SearchField';
import resources from '#resources#';
import Select from 'react-select';

const inputsResources = resources.personalPage.itemForm.inputs;
const getOptionsArr = () => {
    const options = [];
    for (let i = 2; i <= 5; i++) {
        options.push({ value: i, label: i });
    }
    return options;
};
const options = getOptionsArr();

class Roommates extends React.Component {
    render() {
        return (
            <div>
                <Select
                    value={options.find((option) => (option.value === this.props.roommates))}
                    onChange={(selectedValue) => {
                        this.props.setRoommates(selectedValue.value);
                    }}
                    options={options}
                    placeholder={inputsResources.genericDropDownPlaceholder}
                    className='react-select'
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    roommates: state.itemForm.item.roommates
})
const mapDispatchToProps = (dispatch) => ({
    setRoommates: (roommates) => (dispatch(setRoommates(roommates)))
})

const RoommatesWithStore = connect(mapStateToProps, mapDispatchToProps)(Roommates);
export default () => (
    <SearchField metaText={inputsResources.Roommates.metaText} selectorJSX={<RoommatesWithStore />} />
)