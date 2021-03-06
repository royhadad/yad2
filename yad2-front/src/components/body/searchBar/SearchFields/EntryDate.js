import React from 'react';
import { connect } from 'react-redux';
import { setMinEntryDate } from '#actions#/filters';
import { SingleDatePicker } from 'react-dates-temp';
import { OPEN_UP } from 'react-dates-temp/constants';
import resources from '#resources#';
const entryDateResources = resources.body.searchBar.entryDate;
const calendarUnicode = resources.general.unicodeChars.calendar;

class EntryDate extends React.Component {
    state = {
        focused: false
    }
    componentDidMount() {
        document.getElementsByClassName("DateInput_input")[0].readOnly = true;
    }
    render() {
        return (
            <div>
                <SingleDatePicker
                    placeholder={entryDateResources.placeholder + calendarUnicode}
                    date={this.props.minEntryDate}
                    onDateChange={(minEntryDate) => this.props.setMinEntryDate(minEntryDate)}
                    focused={this.state.focused}
                    onFocusChange={({ focused }) => this.setState({ focused })}
                    id="entryDateInputPicker1"
                    openDirection={OPEN_UP}
                    numberOfMonths={1}
                    keepOpenOnDateSelect={true}
                    isRTL={true}
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    minEntryDate: state.filters.search.minEntryDate
});
const mapDispatchToProps = (dispatch) => ({
    setMinEntryDate: (minEntryDate) => dispatch(setMinEntryDate(minEntryDate))
});
export default connect(mapStateToProps, mapDispatchToProps)(EntryDate);