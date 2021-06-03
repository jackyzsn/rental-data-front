import React, { createContext, useReducer } from 'react';

// This function will be used to create `translate` function for the context
// const getTranslate = (langCode) => (key) => translations[langCode][key] || key;

export const Store = createContext();

const initialState = {
  logged: false,
  verified: false,
  loading: false,
  user: {},
  verifyRequests: [],
  propertyInfo: {},
  unVerifyCount: 0,
  menuList: [],
  zoomLevel: 16
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_LOG_STATUS':
      return { ...state, logged: action.payload };
    case 'CHANGE_VERIFY_STATUS':
      return { ...state, verified: action.payload };
    case 'SET_LOGGED_USER':
      return { ...state, user: action.payload };
    case 'CHANGE_ADMIN_STATUS':
      return { ...state, isAdmin: action.payload };
    case 'RETRIEVE_VERIFY_REQUESTS':
      return { ...state, verifyRequests: action.payload };
    case 'RETRIEVE_PROPERTY_INFO':
      return { ...state, propertyInfo: action.payload };
    case 'SET_UNVERIFY_REQUESTS':
      return { ...state, unVerifyCount: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_MENULIST':
      return { ...state, menuList: action.payload };
    case 'SET_ZOOMLEVEL':
      return { ...state, zoomLevel: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
