import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import RealEstatePage from '../components/RealEstatePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/loginPage/LoginPage';
//import PrivateRoute from './PrivateRoute';
//import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/realestate" component={RealEstatePage} />
                <Route path="/" component={RealEstatePage} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
