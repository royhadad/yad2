import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { } from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import 'react-dates-temp/initialize';
import 'react-dates-temp/lib/css/_datepicker.css';
import './styles/styles.scss';
import 'moment/locale/he';
import * as serviceWorker from './serviceWorker';
import { googleAPILoaded } from './actions/items';
require('dotenv').config();

export const store = configureStore();

//const isDev = process.env.NODE_ENV !=='production';

const loadGooglePlacesAPI = () => {
    const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
    console.log(GOOGLE_API_KEY);
    const googlePlacesAPIScriptURL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places&language=he`;
    const googlePlacesAPIScript = document.createElement("script");
    googlePlacesAPIScript.src = googlePlacesAPIScriptURL;
    googlePlacesAPIScript.async = true;
    document.head.appendChild(googlePlacesAPIScript);
    googlePlacesAPIScript.onload = () => {
        store.dispatch(googleAPILoaded());
    };
}

loadGooglePlacesAPI();

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