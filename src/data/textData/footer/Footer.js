class LinksSection {
    constructor(title, links) {
        this.title = title;
        this.links = links;
    }
}
class Link {
    constructor(text, url) {
        this.text = text;
        this.url = url;
    }
}
const linksSections = [];
linksSections.push(new LinksSection('רכב', [
    new Link('פרטי', 'url'),
    new Link('מסחרי', 'url'),
    new Link(`ג'יפים`, 'url'),
    new Link('משאיות', 'url'),
    new Link('אופנועים', 'url'),
    new Link('קטנועים', 'url'),
    new Link('כלי שייט', 'url'),
    new Link('מיוחדים', 'url'),
    new Link('אביזרים', 'url'),
    new Link('רכבי יוקרה', 'url'),
    new Link('מכרזים וכינוס', 'url'),
    new Link('מחירון רכב', 'url'),
    new Link('מימון רכב', 'url')
]));
linksSections.push(new LinksSection('נדלן', [
    new Link('מכירה', 'url'),
    new Link('השכרה', 'url'),
    new Link('שותפים', 'url'),
    new Link('כונס נכסים', 'url'),
    new Link('מדד הנדל"ן', 'url'),
    new Link('דירות חדשות', 'url'),
    new Link('yzer - בונים החלטות חכמות', 'url'),
    new Link('yadata - הערכת שווי נכס', 'url'),
]));
linksSections.push(new LinksSection('יד שנייה', [
    new Link('לכל המוצרים', 'url'),
    new Link('ריהוט', 'url'),
    new Link('סלולר', 'url'),
    new Link('הכל בחינם', 'url'),
    new Link('בזאר יד שנייה', 'url'),
]));
linksSections.push(new LinksSection('חיות מחמד', [
    new Link('כללי', 'url'),
    new Link('כלבים', 'url'),
    new Link('חתולים', 'url'),
    new Link('תוכים ובעלי כנף', 'url'),
    new Link('דגים', 'url'),
    new Link('זוחלים', 'url'),
]));
linksSections.push(new LinksSection('נותני שירות', [
    new Link('מורים פרטיים', 'url'),
    new Link('תיירות ונופש', 'url'),
]));
const copyRightText = `כל הזכויות שמורות לחברת קורל תל מפעילות לוח יד2 - לוח מודעות: דרושים, דירות להשכרה, בתים למכירה, בתים להשכרה, העברת בתים, הובלות אין לעשות שימוש בכל התכנים המופיעים בלוח יד2.`;
const bottomNavLinks = [];
bottomNavLinks.push(new Link('תקנון', 'url'));
bottomNavLinks.push(new Link('הצהרת נגישות', 'url'));
bottomNavLinks.push(new Link('מדיניות פרטיות', 'url'));
bottomNavLinks.push(new Link('מפת האתר', 'url'));
bottomNavLinks.push(new Link('צור קשר', 'url'));

export { linksSections, copyRightText, bottomNavLinks };