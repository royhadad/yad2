import React from 'react';
import { connect } from 'react-redux';
import { setText } from '../../../../actions/filters';

class FreeSearch extends React.Component {

    render() {
        return (
            <input className={'free-search__input'}
                value={this.props.text}
                onChange={(e) => this.props.setText(e.target.value)}
            />
        );
    }
}
const mapStateToProps = (state) => ({
    text: state.filters.search.text
});
const mapDispatchToProps = (dispatch) => ({
    setText: (text) => dispatch(setText(text))
});
export default connect(mapStateToProps, mapDispatchToProps)(FreeSearch);