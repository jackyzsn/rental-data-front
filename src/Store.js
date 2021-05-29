import React, { createContext, useReducer } from 'react';

// This function will be used to create `translate` function for the context
// const getTranslate = (langCode) => (key) => translations[langCode][key] || key;

export const Store = createContext();

const initialState = {
  logged: false,
  loading: false,
  user: {},
  menuList: [],
  zoomLevel: 16
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_LOG_STATUS':
      return { ...state, logged: action.payload };
    case 'SET_LOGGED_USER':
      return { ...state, user: action.payload };
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
