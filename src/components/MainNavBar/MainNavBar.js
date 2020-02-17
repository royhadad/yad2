import React from 'react';
import NavItem from './NavItem';
import { linksSections } from '../../data/textData/MainNavBar';
import AddListingButton from './AddListingButton';
import PersonalAreaButton from './PersonalAreaButton';
import SavedListingsButton from './SavedListingsButton';
import PrevSearchesButton from './PrevSearchesButton';
import {Link} from 'react-router-dom';
class MainNavBar extends React.Component {



    render() {
        return (
            <div className="main-nav-bar">
                <div className="main-nav-bar__right-side">
                    <div className='main-nav-bar__yad2-icon__wrapper'>
                        <Link to="/realestate">
                            <img className="main-nav-bar__yad2-icon" alt="yad 2" src='/images/yad2.png' />
                        </Link>
                    </div>
                    {
                        linksSections.map((linksSection) => (
                            <NavItem key={linksSection.title} linksSection={linksSection} />
                        ))
                    }
                </div>
                <div className="main-nav-bar__left-side">
                    <AddListingButton />
                    <PersonalAreaButton />
                    <SavedListingsButton type="savedListings"/>
                    <PrevSearchesButton />
                    <SavedListingsButton type="carComparison"/>
                </div>
            </div>
        );
    }
}

export default MainNavBar;
