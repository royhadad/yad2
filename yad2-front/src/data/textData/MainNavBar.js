import Link from '#src#/entities/Link';
import LinksSection from '#src#/entities/LinksSection';

const linksSections = [];
let preFix = '/realestate';
linksSections.push(new LinksSection('נדל"ן', [
    new Link('דירות למכירה', preFix + '/forsale'),
    new Link('דירות להשכרה', preFix + '/rent'),
    new Link(`שותפים`, preFix + '/roommates'),
    new Link('מסחרי', preFix + '/commercial'),
    new Link('חיפוש על גבי מפה', '/map'),
    new Link('כונס נכסים', '/kones'),
    new Link('מדד הנדל"ן', '/realestateindex'),
    new Link('יד1 דירות חדשות', '/yad1'),
    new Link('הערכת שווי נכס', '/yadata'),
]));
linksSections[linksSections.length - 1].titleURL = preFix;

preFix = '/vehicles';
linksSections.push(new LinksSection('רכב', [
    new Link('פרטי', preFix + '/private-cars'),
    new Link('מסחרי', preFix + '/commercial-cars'),
    new Link(`ג'יפים`, preFix + '/4X4'),
    new Link('אופנועים', preFix + '/motorcycles'),
    new Link('קטנועים', preFix + '/scooters'),
    new Link('מיוחדים', preFix + '/other'),
    new Link('אביזרים', preFix + '/car-accessories'),
    new Link('משאיות', preFix + '/trucks'),
    new Link('רכבי יוקרה', preFix + '/luxury-cars'),
    new Link('כלי שייט', preFix + '/watercraft'),
    new Link('קטלוג רכבים', '/vehicles-catalog'),
    new Link('מחירון רכב', '/vehicles-pricelist'),
    new Link('מכרזים וכינוס', 'vehicles-kones'),
    new Link('מימון רכב', '/vehicles-funding')
]));
linksSections[linksSections.length - 1].titleURL = preFix;

preFix = '/products';
linksSections.push(new LinksSection('יד שנייה', [
    new Link('כל המוצרים', preFix + '/all'),
    new Link('חשמל', preFix + '/electrical-appliances'),
    new Link('ריהוט', preFix + '/furniture'),
    new Link('עסקים למכירה', preFix + '/businesses-for-sale'),
    new Link('ספורט', preFix + '/sport'),
    new Link('סלולרי', preFix + '/cellular'),
    new Link('לתינוק ולילד', preFix + '/baby-and-child'),
    new Link('הכל בחינם!', preFix + '/giveaway'),
    new Link('יד2 מכל הלב', '/pitchonlev')
]));
linksSections[linksSections.length - 1].titleURL = preFix;

preFix = '/jobs';
linksSections.push(new LinksSection('דרושים', [
    new Link('חיפוש עבודה', preFix + '/all'),
    new Link('פרסום משרות', preFix + '/find-workers'),
    new Link(`כתיבת קורות חיים`, preFix + '/resume'),
    new Link('אודות החברות', preFix + '/companies'),
    new Link('דרושים הייטק', preFix + '/hitech'),
    new Link('דרושים צעירים', preFix + '/young'),
    new Link('צעירים ללא קו"ח', preFix + '/no-resume'),
    new Link('כספים', preFix + '/finance'),
    new Link('מכירות', preFix + '/sales'),
    new Link('שירות לקוחות', preFix + '/customer-service'),
    new Link('אדמיניסטרציה', preFix + '/administration'),
    new Link('מהנדסים', preFix + 'engineers'),
    new Link('תחבורה', preFix + 'transportation'),
    new Link('מסעדנות/תיירות', preFix + '/tourism'),
    new Link('אבטחה', preFix + '/security'),
    new Link('בריאות', preFix + '/health'),
    new Link('בעלי מקצוע', preFix + '/professionals'),
    new Link('הדרכה/הוראה', preFix + '/teaching'),
    new Link('שיווק', preFix + '/marketing'),
    new Link('לתחומים נוספים', preFix + '/other')
]));
linksSections[linksSections.length - 1].titleURL = preFix;

preFix = '/commercial';
linksSections.push(new LinksSection('הכל לעסק', [
    new Link('עסקים למכירה', '/products/businesses-for-sale'),
    new Link('נדל"ן מסחרי', '/realestate/commercial'),
    new Link(`ציוד לעסקים`, '/products/business-equipment'),
    new Link('זכיינות', '/products/businesses-for-sale'),
    new Link('משרדים להשכרה', '/realestate/commercial'),
    new Link('חללי עבודה משותפים', '/realestate/commercial')
]));
linksSections[linksSections.length - 1].titleURL = preFix;

preFix = '/pets';
linksSections.push(new LinksSection('חיות מחמד', [
    new Link('כלבים', preFix + '/dogs'),
    new Link('חתולים', preFix + '/cats'),
    new Link('תוכים ובעלי כנף', preFix + '/parrots'),
    new Link('דגים', preFix + '/fish'),
    new Link('זוחלים', preFix + '/reptiles'),
    new Link('מכרסמים', preFix + '/rodents'),
    new Link('סוסים', preFix + '/horses'),
    new Link('תרנגולים', preFix + '/chickens'),
    new Link('חיות משק', preFix + '/livestock'),
    new Link('חמוסים', preFix + '/ferrets')
]));
linksSections[linksSections.length - 1].titleURL = preFix;

preFix = '/pro';
linksSections.push(new LinksSection('בעלי מקצוע', [
    new Link('מכוני בדיקה ורישוי לרכב', preFix + '/rishuy-rehev'),
    new Link('רחיצת רכב', '/car-wash'),
    new Link(`שמאי מקרקעין`, '/real-estate-appraiser'),
    new Link('חומרי בניין', '/construction-materials'),
    new Link('אינסטלטור', '/plumbers'),
    new Link('חשמלאים', '/electricians'),
    new Link('שיפוצים', '/renovations'),
    new Link('הובלות', '/moving'),
    new Link('רהיטים', '/furniture'),
    new Link('חברות ניקיון ואחזקה', '/maintenance'),
    new Link('לכל בעלי המקצוע', '/all')
]));
linksSections[linksSections.length - 1].titleURL = preFix;

preFix = '/other';
linksSections.push(new LinksSection('עוד...', [
    new Link('תיירות ונופש', preFix + '/tourism'),
    new Link('לימודים', preFix + '/school'),
    new Link('מגזין יד2', preFix + '/magazine')
]));
linksSections[linksSections.length - 1].titleURL = 'url';

export { linksSections };