import React from 'react';
import { connect } from 'react-redux';
import {setMinEntryDate} from '../../../../actions/filters';

class EntryDate extends React.Component{
    render(){
        return (
            <div>
                TODO
            </div>
        );
    }
}
const mapStateToProps = (state)=>({
    minEntryDate: state.filters.search.minEntryDate
});
const mapDispatchToProps = (dispatch)=>({
    setMinEntryDate: (date)=>dispatch(setMinEntryDate())
});
export default connect(mapStateToProps, mapDispatchToProps)(EntryDate);