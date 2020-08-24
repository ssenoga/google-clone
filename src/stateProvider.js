// set the data layer

import React, { createContext, useReducer, useContext } from "react";

// this is the data layer
export const StateContext = createContext();

// build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// this is the hook we interact with mostly
export const UseStateValue = () => useContext(StateContext);