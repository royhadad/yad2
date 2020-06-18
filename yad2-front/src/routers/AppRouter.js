import React, { useEffect } from 'react';
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
import EditItem from '../components/personalPage/EditItem';
import Modal from '../components/generics/Modal';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AppContainer from '#components#/AppContainer';

export const RedirectToHome = () => {
    window.scrollTo(0, 0);
    history.push('/realestate');
}
export const RedirectToMyItems = () => {
    window.scrollTo(0, 0);
    history.push('/personal/edit');
}
export const RedirectToHomeComponent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        history.push('/realestate');
    });
    return null;
}
export const RedirectToMyItemsComponent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        history.push('/personal/edit');
    });
    return null;
}
export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <AppContainer history={history}>
            <Modal />
            <MainNavBar />
            <RealEstateNavBar />
            <Switch>
                <PrivateRoute path="/personal/edit" component={MyItems} exact={true} />
                <PrivateRoute path="/personal/new" component={AddItem} exact={true} />
                <PrivateRoute path="/personal/me" component={EditProfile} exact={true} />
                <PrivateRoute path="/personal/edit/:id" component={EditItem} />
                <Route path="/personal" component={RedirectToMyItemsComponent} />
                <PublicRoute path="/login" component={LoginPage} exact={true} />
                <PublicRoute path="/signup" component={SignupPage} exact={true} />
                <Route path="/realestate" component={RealEstatePage} />
                <Route path="/" component={RedirectToHomeComponent} exact={true} />
                <Route path="/index.html" component={RedirectToHomeComponent} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
            <RealEstatePageFooter />
        </AppContainer>
    </Router>
);

export default AppRouter;
