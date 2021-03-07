import React, { useReducer } from 'react';

import AppContext from './AppContext';
import AppReducer from './AppReducer';
import { FAKE_THING } from './types';

const AppState = (props) => {
  let initialState = {
    fakeThing: null
  };

  // No reason to use the dispatch yet,
  // Refer to this article as a resource: https://medium.com/javascript-in-plain-english/how-to-use-react-context-api-with-functional-component-472f1d5e0851

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addFakeThing = (fakeThing) => {
    dispatch({ type: FAKE_THING, payload: fakeThing})
  }

  return (
    <AppContext.Provider
      value={{
        fakeThing: state.fakeThing,
        addFakeThing
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;