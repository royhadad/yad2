import React from 'react';
import NavItem from './NavItem';
import { linksSections } from '../../data/textData/MainNavBar';

class MainNavBar extends React.Component {



    render() {

        return (
            <div className="main-nav-bar">
                <a href="url">
                    <img className="main-nav-bar__yad2-icon" alt="yad 2" src='/images/yad2.png' />
                </a>
                {
                    linksSections.map((linksSection) => (
                        <NavItem key={linksSection.title} linksSection={linksSection} />
                    ))
                }
            </div>
        );
    }
}

export default MainNavBar;
