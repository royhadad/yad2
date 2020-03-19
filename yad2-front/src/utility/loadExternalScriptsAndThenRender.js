
const loadGooglePlacesAPI = (callback) => {
    const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
    console.log(GOOGLE_API_KEY);
    const googlePlacesAPIScriptURL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places&language=he`;
    const googlePlacesAPIScript = document.createElement("script");
    googlePlacesAPIScript.src = googlePlacesAPIScriptURL;
    googlePlacesAPIScript.async = true;
    document.head.appendChild(googlePlacesAPIScript);
    googlePlacesAPIScript.onload = () => {
        callback();
    };
}

export default (renderFunc) => {
    loadGooglePlacesAPI(renderFunc);
}