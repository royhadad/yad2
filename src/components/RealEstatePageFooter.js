import React from 'react';
import {paragraph} from '../data/textData/footer/RealEstatePageFooter';
import FooterLinks from './FooterLinks';
import SocialMediaLinks from './SocialMediaLinks';
import {copyRightText} from '../data/textData/footer/Footer';
import FooterBottomNavLinks from './FooterBottomNavLinks';

const RealEstatePageFooter = () => {
    return (
        <div className="footer">
            <p className="footer__paragraph">{paragraph}</p>
            <FooterLinks />
            <SocialMediaLinks />
            <p className="footer__copy-right-text">{copyRightText}</p>
            <hr/>
            <FooterBottomNavLinks />
            <div className="footer__version-pro-link"><a href="url">גירסה: pro</a></div>
      </div>
    );
}

export default RealEstatePageFooter;
