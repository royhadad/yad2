import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
/*

                <RealEstateNavBarLinks
                    url='/kones'
                    text='כונס נכסים'
                    icon={<img className='icon__yad1' src='/images/kones-nehasim.svg' alt='kones nehasim' />}
                />
                <RealEstateNavBarLinks
                    url='/realestateindex'
                    text='מדד הנדל"ן'
                    icon={<img className='icon__yad1' src='/images/realEstateIndex.svg' alt='placeholder' />}
                />

*/
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
                <RealEstateNavBarLinks
                    url='/yadata'
                    text=' הערכת שווי נכס'
                    icon={<img className='icon__yadata' src='/images/yadata_logo_black.svg' alt='yadata' viewBox='1' />}
                />
                <RealEstateNavBarLinks
                    url='/yad1'
                    text='יד1 דירות חדשות'
                    icon={<img className='icon__yad1' src='/images/yad1_logo.svg' alt='yad1' viewBox='1' />}
                />
                <RealEstateNavBarLinks
                    url='/realestateindex'
                    text='מדד הנדל"ן'
                    icon={<img className='icon__real-estate-index' src='/images/realEstateIndex.svg' alt='real estate index' viewBox='1' />}
                />
                <RealEstateNavBarLinks
                    url='/kones'
                    text='כונס נכסים'
                    icon={<img className='icon__kones' src='/images/kones-nehasim.svg' alt='kones nehasim' viewBox='1' />}
                />
            </div>
        </div>
    );
};

class RealEstateNavBarItemWithoutStore extends React.Component {
    render() {
        const { text, url, category } = this.props;
        let regularStyle = {};
        const specialStyle = { boxShadow: 'inset 0 -0.3rem 0 #ff7100', color: '#ff7100' };
        const style = url === '/realestate/' + category ? specialStyle : regularStyle;
        return (
            <div className='real-estate-nav-item__wrapper' style={style}>
                <Link to={url} className='react-link'>
                    <div className='real-estate-nav-item__container'>
                        {text}
                    </div>
                </Link>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    category: state.filters.search.category
});
const RealEstateNavBarItem = connect(mapStateToProps)(RealEstateNavBarItemWithoutStore);

const RealEstateNavBarLinks = ({ text, url, icon }) => {
    return (
        <div className='real-estate-nav-link__wrapper'>
            <Link to={url} className='react-link'>
                <div className='real-estate-nav-link__container'>
                    {icon}
                    {text}
                </div>
            </Link>
        </div>
    );
};

export default RealEstateNavBar;
