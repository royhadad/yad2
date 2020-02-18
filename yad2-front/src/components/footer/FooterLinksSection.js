import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinksSection = ({ title, links }) => (
    <div className="footer__links__section">
        <h4>{title}</h4>
        <ul>
            {
                links.map((link) => (
                    <li className="footer__li" key={link.text}><Link to={link.url} className="react-link-regular">{link.text}</Link></li>
                ))
            }
        </ul>
    </div>
)

export default FooterLinksSection;