import React from 'react';
//TODO change a to Link
// import { Link } from 'react-router-dom';

const FooterLinksSection = ({ title, links }) => (
    <div className="footer__links__section">
        <h4>{title}</h4>
        <ul>
            {
                links.map((link) => (
                    <li className="footer__li" key={link.text}><a className="footer__link" href={link.url}>{link.text}</a></li>
                ))
            }
        </ul>
    </div>
)

export default FooterLinksSection;