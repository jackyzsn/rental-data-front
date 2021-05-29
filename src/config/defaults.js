export const DEAULT_MENU_LIST = [
  { labelKey: 'search', url: '/search' },
  { labelKey: 'about', url: '/about' },
];

export const EXTRA_MENU_LIST = [{ labelKey: 'admin', url: '/admin' }];

export const REQUEST_HEADER = {
  userid: 'Jacky',
  source: 'Web',
};

export const GPS_REQUEST = {
  houseType: [],
  saleType: ['Sale'],
  listDate: [],
  lastStatus: [],
  price: { low: 0, high: 32 },
  bedroom: { low: 0, high: 6 },
  washroom: { low: 0, high: 6 },
  garage: { low: 0, high: 6 },
};

export const APPOINTMENT_RECEIVE_EMAIL = 'jacky_zsn@yahoo.ca';

export const SEND_APPOINTMENT_EMAIL = true;

export const BACK_AUTH_HEADER = {
  Authorization: 'Basic bW9iaWxlOmFiY2RlZmdoaWprMTIzNDU2Nzg5',
};
