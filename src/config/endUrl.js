const baseAPIURL = '';
const baseAPPURL = '';
const baseImageURL = '';

// Sign in URL from Home
export const REDIRECT_GOOGLE_SIGN_IN = '/auth/google/web';
export const REDIRECT_FACEBOOK_SIGN_IN = '/auth/facebook/web';
export const BACK_GET_SESSION_URL = '/api/checksession';
export const BACK_ADD_SESSION_URL = '/api/addsession';

export const BACK_CLEAR_SESSION_URL = baseAPIURL + 'api/clearsession';

export const BACK_GET_MARKETING_CONTENT = baseAPIURL + 'api/marketing';
export const BACK_SEARCH_LATEST_URL = baseAPIURL + 'api/listing/latest';
export const BACK_GET_DETAIL_URL = baseAPIURL + 'api/listing/detail';
export const BACK_GET_HISTORY_URL = baseAPIURL + 'api/listing/search/history';
export const BACK_GET_ALL_IMAGES_URL = baseAPIURL + 'api/listing/getImageURLs';
export const BACK_SEARCH_ADDRESS_URL = baseAPIURL + 'api/listing/search/address';
export const BACK_SEARCH_GPS_URL = baseAPIURL + 'api/listing/search/gps';
export const BACK_LAST_UPDATE_TIME_URL = baseAPIURL + 'api/lastupdatetime';
export const BACK_APPOINTMENT_REQ_URL = baseAPIURL + 'api/appointment/request';
export const BACK_SEARCH_HISTORY_URL = baseAPIURL + 'api/listing/search/history';
export const BACK_MARKETING_UPLOAD_URL = baseAPIURL + 'api/marketing/upload';
export const BACK_GET_MARKETING_CONFIG_URL = baseAPIURL + 'api/marketing/config';
export const BACK_UPDATE_MARKETING_CONFIG_URL = baseAPIURL + 'api/marketing/update';
export const BACK_REMOVE_MARKETING_PICS_URL = baseAPIURL + 'api/marketing/remove/pics';
export const BACK_GET_USERS_PROFILES_URL = baseAPIURL + 'api/admin/retrieveAllUserProfiles';
export const BACK_UPDATE_USER_PROFILE_URL = baseAPIURL + 'api/admin/updateUserProfile';
export const BACK_DELETE_USER_PROFILE_URL = baseAPIURL + 'api/admin/deleteUserProfile';
export const BACK_SEND_OTP_URL = baseAPIURL + 'api/accesscode/create';
export const BACK_VERIFY_OTP_URL = baseAPIURL + 'api/accesscode/verify';

// Image prefix
export const IMAGE_URL_PREFIX = baseImageURL + 'apio/listing/imageByURL/';
export const APP_ALL_IMAGE_URL_PREFIX = baseAPPURL + 'listing/allimages/';
export const LIST_DETAIL_URL_PREFIX = baseAPPURL + 'listing/';
export const MARKETING_IMAGE_URL_RPEFIX = baseImageURL + 'apio/marketing/imageByURL/';
