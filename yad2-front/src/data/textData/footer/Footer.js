import Link from '../../../entities/Link';
import LinksSection from '../../../entities/LinksSection';

const linksSections = [];

let preFix = '/realestate';
linksSections.push(new LinksSection('נדלן', [
    new Link('מכירה', preFix+'/forsale'),
    new Link('השכרה', preFix+'/rent'),
    new Link('שותפים', preFix+'/roommates'),
    new Link('כונס נכסים', '/kones'),
    new Link('מדד הנדל"ן', '/realestateindex'),
    new Link('דירות חדשות', '/yad1'),
    new Link('yzer - בונים החלטות חכמות', '/yzer'),
    new Link('yadata - הערכת שווי נכס', '/yadata')
]));

preFix = '/vehicles';
linksSections.push(new LinksSection('רכב', [
    new Link('פרטי', preFix+'/private-cars'),
    new Link('מסחרי', preFix+'/commercial-cars'),
    new Link(`ג'יפים`, preFix+'/4X4'),
    new Link('משאיות', preFix+'/trucks'),
    new Link('אופנועים', preFix+'/motorcycles'),
    new Link('קטנועים', preFix+'/scooters'),
    new Link('כלי שייט', preFix+'/watercraft'),
    new Link('מיוחדים', preFix+'/other'),
    new Link('אביזרים', preFix+'/car-accessories'),
    new Link('רכבי יוקרה', preFix+'/luxury-cars'),
    new Link('מכרזים וכינוס', 'vehicles-kones'),
    new Link('מחירון רכב', '/vehicles-pricelist'),
    new Link('מימון רכב', '/vehicles-funding')
]));

preFix= '/products';
linksSections.push(new LinksSection('יד שנייה', [
    new Link('לכל המוצרים', preFix+'/all'),
    new Link('ריהוט', preFix+'/furniture'),
    new Link('סלולר', preFix+'/cellular'),
    new Link('הכל בחינם', preFix+'/giveaway'),
    new Link('בזאר יד שנייה', '/pitchonlev')
]));

preFix= '/pets';
linksSections.push(new LinksSection('חיות מחמד', [
    new Link('כללי', preFix),
    new Link('כלבים', preFix+'/dogs'),
    new Link('חתולים', preFix+'/cats'),
    new Link('תוכים ובעלי כנף', preFix+'/parrots'),
    new Link('דגים', preFix+'/fish'),
    new Link('זוחלים', preFix+'/reptiles')
]));

preFix='/other';
linksSections.push(new LinksSection('נותני שירות', [
    new Link('מורים פרטיים', preFix+'/school'),
    new Link('תיירות ונופש', preFix+'/tourism')
]));
const copyRightText = `כל הזכויות שמורות לחברת קורל תל מפעילות לוח יד2 - לוח מודעות: דרושים, דירות להשכרה, בתים למכירה, בתים להשכרה, העברת בתים, הובלות אין לעשות שימוש בכל התכנים המופיעים בלוח יד2.`;
const bottomNavLinks = [];
bottomNavLinks.push(new Link('תקנון', '/terms'));
bottomNavLinks.push(new Link('הצהרת נגישות', '/accessibility-statement'));
bottomNavLinks.push(new Link('מדיניות פרטיות', '/privacy-policy'));
bottomNavLinks.push(new Link('מפת האתר', '/sitemap'));
bottomNavLinks.push(new Link('צור קשר', '/contact'));

export { linksSections, copyRightText, bottomNavLinks };