import React from 'react';
import { bottomNavLinks } from '../../data/textData/footer/Footer';

const FooterBottomNavLinks = () => (
    <div className="footer__bottom-nav-links">
        {
            bottomNavLinks.map((link) => (
                <a key={link.text} href={link.url}>{link.text}</a>
            ))
        }
    </div>
);

export default FooterBottomNavLinks;