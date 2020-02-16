import React from 'react';
const RealEstateNavBar = () => {
    return (
        <div className="real-estate-nav-bar">
            <div className="main-nav-bar__right-side">
                <div className='icon-spacer'></div>
                <RealEstateNavBarItem text='מכירה' url='url' />
                <RealEstateNavBarItem text='השכרה' url='url' />
                <RealEstateNavBarItem text='דירות שותפים' url='url' />
                <RealEstateNavBarItem text='נדל"ן מסחרי' url='url' />
            </div>
            <div className="main-nav-bar__left-side">
                <RealEstateNavBarLinks url='url' text='כונס נכסים' />
                <RealEstateNavBarLinks url='url' text='מדד הנדל"ן' />
                <RealEstateNavBarLinks url='url' text='יד1 דירות חדשות' />
                <RealEstateNavBarLinks url='url' text='yadata הערכת שווי נכס' />
            </div>
        </div>
    );
};

const RealEstateNavBarItem = ({ text, url }) => {
    return (
        <div className='real-estate-nav-item__wrapper'>
            <a href={url}>
                <div className='real-estate-nav-item__container'>
                    {text}
                </div>
            </a>
        </div>
    );
};
const RealEstateNavBarLinks = ({ text, url }) => {
    return (
        <div className='real-estate-nav-link__wrapper'>
            <a href={url}>
                <div className='real-estate-nav-link__container'>
                    {text}
                </div>
            </a>
        </div>
    );
};

export default RealEstateNavBar;
