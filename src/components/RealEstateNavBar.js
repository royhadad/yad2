import React from 'react';
import { history } from '../routers/AppRouter';
import { Link } from 'react-router-dom';

const RealEstateNavBar = () => {
    return (
        <div className="real-estate-nav-bar">
            <div className="main-nav-bar__right-side">
                <div className='icon-spacer'></div>
                <RealEstateNavBarItem text='מכירה' url='/realestate/forsale' />
                <RealEstateNavBarItem text='השכרה' url='/realestate/rent' />
                <RealEstateNavBarItem text='דירות שותפים' url='/realestate/roommates' />
                <RealEstateNavBarItem text='נדל"ן מסחרי' url='/realestate/commercial' />
            </div>
            <div className="main-nav-bar__left-side">
                <RealEstateNavBarLinks url='/kones' text='כונס נכסים' />
                <RealEstateNavBarLinks url='/realestateindex' text='מדד הנדל"ן' />
                <RealEstateNavBarLinks url='/yad1' text='יד1 דירות חדשות' />
                <RealEstateNavBarLinks url='/yadata' text='yadata הערכת שווי נכס' />
            </div>
        </div>
    );
};

const RealEstateNavBarItem = ({ text, url }) => {
    const currentPath = history.location.pathname;
    const preFix = '/realestate';
    const afterRealEstate = currentPath.slice(currentPath.indexOf(preFix) + preFix.length);
    let regularStyle = {};
    const specialStyle = { boxShadow: 'inset 0 -0.3rem 0 #ff7100', color: '#ff7100' };
    if (
        afterRealEstate !== '/forsale' &&
        afterRealEstate !== '/rent' &&
        afterRealEstate !== '/roommates' &&
        afterRealEstate !== '/commercial'
    ) {
        history.push(preFix + '/forsale');
    }
    const style = currentPath === url ? specialStyle : regularStyle;
    return (
        <div className='real-estate-nav-item__wrapper' style={style}>
            <Link to={url} className='react-link'>
                <div className='real-estate-nav-item__container'>
                    {text}
                </div>
            </Link>
        </div>
    );
};
const RealEstateNavBarLinks = ({ text, url }) => {
    return (
        <div className='real-estate-nav-link__wrapper'>
            <Link to={url} className='react-link'>
                <div className='real-estate-nav-link__container'>
                    {text}
                </div>
            </Link>
        </div>
    );
};

export default RealEstateNavBar;
