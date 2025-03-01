export const NETFLIX_LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const NETFLIX_BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/AU-en-20250217-TRIFECTA-perspective_1820115a-706f-4b78-96db-4da6961758eb_large.jpg";

export const USER_AVATAR = "https://th.bing.com/th/id/OIP.kYYbdJhBIh1SEi8MKTPYpgHaHa?w=164&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";

// this process env means keeping our security code in env file
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer' + process.env.REACT_APP_TMDB_KEY
    }
};

export const SUPPORTED_LANGUAGES=[{name:'English',value:'en'},{name:'Hindi',value:'hindi'},{name:'Telugu',value:'tel'}];