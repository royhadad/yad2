import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { } from '#src#/routers/AppRouter';
import configureStore from '#src#/store/configureStore';
import loadExternalScriptsAndThenRender from '#src#/utility/loadExternalScriptsAndThenRender';
import 'normalize.css/normalize.css';
import 'react-dates-temp/initialize';
import 'react-dates-temp/lib/css/_datepicker.css';
import 'react-circular-progressbar/dist/styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '#src#/styles/styles.scss';
import 'moment/locale/he';
import * as serviceWorker from './serviceWorker';
export const store = configureStore();

//const isDev = process.env.NODE_ENV !=='production';

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

loadExternalScriptsAndThenRender(renderApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();