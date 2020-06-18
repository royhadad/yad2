import React from 'react';
import NavItem from './NavItem';
import { linksSections } from '#src#/data/textData/MainNavBar';
import AddItemButton from './AddItemButton';
import PersonalAreaButton from './PersonalAreaButton';
import SavedItemsButton from './SavedItemsButton';
import PrevSearchesButton from './PrevSearchesButton';
import { Link } from 'react-router-dom';
import getFullImageURL from '#src#/utility/getFullImageURL';
class MainNavBar extends React.Component {



    render() {
        return (
            <div className="main-nav-bar">
                <div className="main-nav-bar__right-side">
                    <div className='main-nav-bar__yad2-icon__wrapper'>
                        <Link to="/realestate">
                            <img className="main-nav-bar__yad2-icon" alt="yad 2" src={getFullImageURL('yad2.png')} />
                        </Link>
                    </div>
                    {
                        linksSections.map((linksSection) => (
                            <NavItem key={linksSection.title} linksSection={linksSection} />
                        ))
                    }
                </div>
                <div className="main-nav-bar__left-side">
                    <AddItemButton />
                    <PersonalAreaButton />
                    <SavedItemsButton type="savedItems" />
                    <PrevSearchesButton />
                    <SavedItemsButton type="carComparison" />
                </div>
            </div>
        );
    }
}

export default MainNavBar;
