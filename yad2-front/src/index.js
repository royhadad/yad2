import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, {  } from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import 'react-dates-temp/initialize';
import 'react-dates-temp/lib/css/_datepicker.css';
import './styles/styles.scss';
import 'moment/locale/he'

import * as serviceWorker from './serviceWorker';
alert(process.env);
alert(process.env.PORT);
export const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    }
};

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//dev-proxy: "http://localhost:8080"
//production-proxy: "http://ec2-63-35-229-122.eu-west-1.compute.amazonaws.com:8080"
