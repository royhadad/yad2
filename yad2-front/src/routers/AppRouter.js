import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MainNavBar from '#components#/MainNavBar/MainNavBar';
import RealEstateNavBar from '#components#/RealEstateNavBar';
import RealEstatePageFooter from '#components#/footer/RealEstatePageFooter';
import RealEstatePage from '#components#/RealEstatePage';
import NotFoundPage from '#components#/NotFoundPage';
import LoginPage from '#components#/Login';
import PersonalPage from '#components#/personalPage/PersonalPage';
import Modal from '../components/generics/Modal';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


//import PrivateRoute from './PrivateRoute';
//import PublicRoute from './PublicRoute';
const RedirectToHome = (props) => {
    props.history.push('/realestate');
    return null;
}
export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Modal />
            <MainNavBar />
            <RealEstateNavBar />
            <Switch>
                <PublicRoute path="/login" component={LoginPage} />
                <PrivateRoute path="/personal" component={PersonalPage} />
                <Route path="/realestate" component={RealEstatePage} />
                <Route path="/" component={RedirectToHome} exact={true} />
                <Route path="/index.html" component={RedirectToHome} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
            <RealEstatePageFooter />
        </div>
    </Router>
);

export default AppRouter;
