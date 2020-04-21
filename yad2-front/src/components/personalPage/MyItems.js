import React from 'react';
import { connect } from 'react-redux';
import PersonalPage from './PersonalPage';

class MyItems extends React.Component {
    render() {
        return (
            <div className='my-items__wrapper'>
                <h1>my items!</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({

})
const Body = connect(mapStateToProps, mapDispatchToProps)(MyItems);
export default () => (<PersonalPage children={<Body />} selected={'edit'} />);