import React from 'react';
import getFullImageURL from '../../utility/getFullImageURL';

const SocialMediaLinks = () => {
    return (
        <div className="footer__social-media-links">
            <a href="https://www.youtube.com/user/MeYad2" className="footer__social-media-icon-wrapper"><img alt="youtube link" src={getFullImageURL("socialMediaLinks/youtube.png")} /></a>
            <a href="https://www.facebook.com/yad2page" className="footer__social-media-icon-wrapper"><img alt="facebook link" src={getFullImageURL("socialMediaLinks/facebook.png")}></img></a>
            <a href="https://play.google.com/store/apps/details?id=com.goldtouch.ct.yad2" className="footer__social-media-icon-wrapper"><img alt="google play link" src={getFullImageURL("socialMediaLinks/google-play.png")}></img></a>
            <a href="https://apps.apple.com/us/app/yad2-%D7%99%D7%932/id406318295" className="footer__social-media-icon-wrapper"><img alt="app store link" src={getFullImageURL("socialMediaLinks/apple.png")}></img></a>
        </div>
    );
}

export default SocialMediaLinks;
