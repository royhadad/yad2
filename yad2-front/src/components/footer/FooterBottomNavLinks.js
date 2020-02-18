import React from 'react';
import { bottomNavLinks } from '../../data/textData/footer/Footer';
import { Link } from 'react-router-dom';

const FooterBottomNavLinks = () => (
    <div className="footer__bottom-nav-links">
        {
            bottomNavLinks.map((link) => (
                <Link key={link.text} to={link.url} className='react-link-regular'>{link.text}</Link>
            ))
        }
    </div>
);

export default FooterBottomNavLinks;