import Search from '#src#/entities/Search';
const searches = [];

searches.push(new Search(
    'תל אביב',
    'apartment',
));
searches.push(new Search(
    'ירושלים, תלפיות',
));
searches.push(new Search(
    'גדרה',
    undefined,
    3,
    5
));
export default searches;