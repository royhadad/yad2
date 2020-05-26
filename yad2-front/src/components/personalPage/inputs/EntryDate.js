import React from 'react';
import { connect } from 'react-redux';
import { setEntryDate, toggleIsImmediateEntry } from '../../../actions/itemForm';
import { SingleDatePicker } from 'react-dates-temp';
import { OPEN_UP } from 'react-dates-temp/constants';
import moment from 'moment';
import Checkbox from '../../generics/Checkbox';
import SearchField from '../../generics/SearchField';
import { store } from '#src#/index';
import resources from '#resources#';
const inputsResources = resources.personalPage.itemForm.inputs;

class EntryDate extends React.Component {
    state = {
        focused: false
    }
    componentDidMount() {
        document.getElementsByClassName("DateInput_input")[0].readOnly = true;
    }
    render() {
        return (
            <React.Fragment>
                <SingleDatePicker
                    placeholder={'בחר תאריך כניסה'}
                    date={moment(this.props.entryDate)}
                    onDateChange={(entryDate) => this.props.setEntryDate(moment(entryDate).valueOf())}
                    focused={this.state.focused}
                    onFocusChange={({ focused }) => this.setState({ focused })}
                    id="entryDateInputPicker2"
                    openDirection={OPEN_UP}
                    numberOfMonths={1}
                    keepOpenOnDateSelect={false}
                    isRTL={true}
                    disabled={this.props.isImmediateEntry}
                />
                <Checkbox
                    option={{ text: 'כניסה מיידית', value: '1' }}
                    isSelected={this.props.isImmediateEntry}
                    toggleOption={(value) => {
                        this.props.toggleIsImmediateEntry();
                    }}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    entryDate: state.itemForm.item.entryDate,
    isImmediateEntry: state.itemForm.item.isImmediateEntry
})
const mapDispatchToProps = (dispatch) => ({
    setEntryDate: (entryDate) => (dispatch(setEntryDate(entryDate))),
    toggleIsImmediateEntry: () => (dispatch(toggleIsImmediateEntry()))
})
const EntryDateWithStore = connect(mapStateToProps, mapDispatchToProps)(EntryDate);
export default () => (
    <SearchField metaText={'תאריך כניסה:'} selectorJSX={<EntryDateWithStore />} />
)