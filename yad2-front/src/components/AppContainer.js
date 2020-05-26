import { store } from '../index';
import { setError } from '../actions/itemForm';
import React from 'react';

class AppContainer extends React.Component {
    componentDidMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            //make sure you set the error/success message before redirecting
            store.dispatch(setError(undefined));
        });
    }
    componentWillUnmount() {
        this.unlisten();
    }
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}
export default AppContainer;