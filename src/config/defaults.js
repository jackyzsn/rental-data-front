export const DEAULT_MENU_LIST = [
  { labelKey: 'search', url: '/search' },
  { labelKey: 'about', url: '/about' }
];

export const EXTRA_MENU_LIST = [{ labelKey: 'admin', url: '/admin' }];

export const REQUEST_HEADER = {
  source: 'Web'
};

export const GPS_REQUEST = {
  houseType: [],
  saleType: ['Sale'],
  listDate: [],
  lastStatus: [],
  price: { low: 0, high: 32 },
  bedroom: { low: 0, high: 6 },
  washroom: { low: 0, high: 6 },
  garage: { low: 0, high: 6 }
};
