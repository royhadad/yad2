import React from 'react';
import { connect } from 'react-redux';
import { setRooms } from '../../../actions/itemForm';
import SearchField from '#components#/generics/SearchField';
import resources from '#resources#';
import Select from 'react-select';

const inputsResources = resources.personalPage.itemForm.inputs;
const getOptionsArr = () => {
    const options = [];
    for (let i = 1; i <= 12; i += 0.5) {
        options.push({ value: i, label: i });
    }
    return options;
};
const options = getOptionsArr();

class Rooms extends React.Component {
    render() {
        return (
            <div>
                <Select
                    value={options.find((option) => (option.value === this.props.rooms))}
                    onChange={(selectedValue) => {
                        this.props.setRooms(selectedValue.value);
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
    rooms: state.itemForm.item.rooms
})
const mapDispatchToProps = (dispatch) => ({
    setRooms: (rooms) => (dispatch(setRooms(rooms)))
})

const RoomsWithStore = connect(mapStateToProps, mapDispatchToProps)(Rooms);
export default () => (
    <SearchField metaText={inputsResources.Rooms.metaText} selectorJSX={<RoomsWithStore />} />
)