import resources from '../resources.json';
const preFix = resources.general.constants.IMAGES_URL_PREFIX;
export default (urlEnd)=>preFix+urlEnd;