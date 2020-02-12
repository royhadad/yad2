import Link from '../../entities/Link';
import LinksSection from '../../entities/LinksSection';

const linksSections = [];
linksSections.push(new LinksSection('נדל"ן', [
    new Link('דירות למכירה', 'url'),
    new Link('דירות להשכרה', 'url'),
    new Link(`שותפים`, 'url'),
    new Link('מסחרי', 'url'),
    new Link('חיפוש על גבי מפה', 'url'),
    new Link('כונס נכסים', 'url'),
    new Link('מדד הנדל"ן', 'url'),
    new Link('יד1 דירות חדשות', 'url'),
    new Link('הערכת שווי נכס', 'url'),
]));
linksSections[linksSections.length-1].titleURL = 'url';

linksSections.push(new LinksSection('רכב', [
    new Link('פרטי', 'url'),
    new Link('מסחרי', 'url'),
    new Link(`ג'יפים`, 'url'),
    new Link('אופנועים', 'url'),
    new Link('קטנועים', 'url'),
    new Link('מיוחדים', 'url'),
    new Link('אביזרים', 'url'),
    new Link('משאיות', 'url'),
    new Link('רכבי יוקרה', 'url'),
    new Link('כלי שייט', 'url'),
    new Link('קטלוג רכבים', 'url'),
    new Link('מחירון רכב', 'url'),
    new Link('מכרזים וכינוס', 'url'),
    new Link('מימון רכב', 'url')
]));
linksSections[linksSections.length-1].titleURL = 'url';

linksSections.push(new LinksSection('יד שנייה', [
    new Link('כל המוצרים', 'url'),
    new Link('חשמל', 'url'),
    new Link('ריהוט', 'url'),
    new Link('עסקים למכירה', 'url'),
    new Link('ספורט', 'url'),
    new Link('סלולרי', 'url'),
    new Link('לתינוק ולילד', 'url'),
    new Link('הכל בחינם!', 'url'),
    new Link('יד2 מכל הלב', 'url')
]));
linksSections[linksSections.length-1].titleURL = 'url';

linksSections.push(new LinksSection('דרושים', [
    new Link('חיפוש עבודה', 'url'),
    new Link('פרסום משרות', 'url'),
    new Link(`כתיבת קורות חיים`, 'url'),
    new Link('אודות החברות', 'url'),
    new Link('דרושים הייטק', 'url'),
    new Link('דרושים צעירים', 'url'),
    new Link('צעירים ללא קו"ח', 'url'),
    new Link('כספים', 'url'),
    new Link('מכירות', 'url'),
    new Link('שירות לקוחות', 'url'),
    new Link('אדמיניסטרציה', 'url'),
    new Link('מהנדסים', 'url'),
    new Link('תחבורה', 'url'),
    new Link('מסעדנות/תיירות', 'url'),
    new Link('אבטחה', 'url'),
    new Link('בריאות', 'url'),
    new Link('בעלי מקצוע', 'url'),
    new Link('הדרכה/הוראה', 'url'),
    new Link('שיווק', 'url'),
    new Link('לתחומים נוספים', 'url')
]));
linksSections[linksSections.length-1].titleURL = 'url';

linksSections.push(new LinksSection('הכל לעסק', [
    new Link('עסקים למכירה', 'url'),
    new Link('נדל"ן מסחרי', 'url'),
    new Link(`ציוד לעסקים`, 'url'),
    new Link('זכיינות', 'url'),
    new Link('משרדים להשכרה', 'url'),
    new Link('חללי עבודה משותפים', 'url')
]));
linksSections[linksSections.length-1].titleURL = 'url';

linksSections.push(new LinksSection('חיות מחמד', [
    new Link('כלבים', 'url'),
    new Link('חתולים', 'url'),
    new Link('תוכים ובעלי כנף', 'url'),
    new Link('דגים', 'url'),
    new Link('זוחלים', 'url'),
    new Link('מכרסמים', 'url'),
    new Link('סוסים', 'url'),
    new Link('תרנגולים', 'url'),
    new Link('חיות משק', 'url'),
    new Link('חמוסים', 'url')
]));
linksSections[linksSections.length-1].titleURL = 'url';

linksSections.push(new LinksSection('בעלי מקצוע', [
    new Link('מכוני בדיקה ורישוי לרכב', 'url'),
    new Link('רחיצת רכב', 'url'),
    new Link(`שמאי מקרקעין`, 'url'),
    new Link('חומרי בניין', 'url'),
    new Link('אינסטלטור', 'url'),
    new Link('חשמלאים', 'url'),
    new Link('שיפוצים', 'url'),
    new Link('הובלות', 'url'),
    new Link('רהיטים', 'url'),
    new Link('חברות ניקיון ואחזקה', 'url'),
    new Link('לכל בעלי המקצוע', 'url')
]));
linksSections[linksSections.length-1].titleURL = 'url';

linksSections.push(new LinksSection('עוד...', [
    new Link('תיירות ונופש', 'url'),
    new Link('לימודים', 'url'),
    new Link('מגזין יד2', 'url')
]));
linksSections[linksSections.length-1].titleURL = 'url';

export { linksSections };