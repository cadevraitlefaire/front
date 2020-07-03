import React, { createContext, useReducer } from 'react';
import { Token } from '../helpers';
import { Username } from '../helpers/Username';

export const UPDATE_CLIENT = 'UPDATE_CLIENT';
export const LOGOUT = 'LOGOUT';

const defaultValue = {
  isLogged: !!new Token().get(),
  user: new Token().get()
};

function reducer(state, { payload, type }) {
  switch (type) {
    case UPDATE_CLIENT: {
      new Token().set(payload || '');
      new Username().set();
      return {
        ...state,
        isLogged: true,
        user: payload || '',
      };
    }
    case LOGOUT: {
      new Token().delete();
      new Username().delete();
      return {
        ...state,
        isLogged: false,
        user: null,
        username: null
      };
    }
    default:
      return state;
  }
}

export const UserContext = createContext(defaultValue);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultValue);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
