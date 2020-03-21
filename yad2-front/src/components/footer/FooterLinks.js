import React from 'react';
import { linksSections } from '#src#/data/textData/footer/Footer';
import FooterLinksSection from './FooterLinksSection.js';

const FooterLinks = () => (
    <div className="footer__links__sections">
        {
            linksSections.map((linksSection) => (
                <FooterLinksSection key={linksSection.title} title={linksSection.title} links={linksSection.links} />
            ))
        }

    </div>
)

export default FooterLinks;