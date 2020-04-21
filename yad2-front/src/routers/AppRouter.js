import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MainNavBar from '#components#/MainNavBar/MainNavBar';
import RealEstateNavBar from '#components#/RealEstateNavBar';
import RealEstatePageFooter from '#components#/footer/RealEstatePageFooter';
import RealEstatePage from '#components#/RealEstatePage';
import NotFoundPage from '#components#/NotFoundPage';
import LoginPage from '#components#/Login';
import SignupPage from '#components#/Signup';
import MyItems from '../components/personalPage/MyItems';
import EditProfile from '../components/personalPage/EditProfile';
import AddItem from '../components/personalPage/AddItem';
import Modal from '../components/generics/Modal';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const RedirectToHome = (props) => {
    props.history.push('/realestate');
    return null;
}
const RedirectToMyItems = (props) => {
    props.history.push('/personal/edit');
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
                <PrivateRoute path="/personal/edit" component={MyItems} exact={true} />
                <PrivateRoute path="/personal/new" component={AddItem} exact={true} />
                <PrivateRoute path="/personal/me" component={EditProfile} exact={true} />
                <PrivateRoute path="/personal" component={RedirectToMyItems} />
                <PublicRoute path="/login" component={LoginPage} exact={true} />
                <PublicRoute path="/signup" component={SignupPage} exact={true} />
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
