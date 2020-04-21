import React from 'react';
import { connect } from 'react-redux';
import PersonalPage from './PersonalPage';

class AddItem extends React.Component {
    render() {
        return (
            <div className='add-item__wrapper'>
                <h1>add item!</h1>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({

})
const Body = connect(mapStateToProps, mapDispatchToProps)(AddItem);
export default () => (<PersonalPage children={<Body />} selected={'new'} />);